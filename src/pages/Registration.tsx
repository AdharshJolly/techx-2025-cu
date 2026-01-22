import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ArrowLeft,
  Loader2,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Shared layout components
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import FloatingParticles from "@/components/ui/FloatingParticles";
import NeuralBackground from "@/components/ui/NeuralBackground";
import PageLoader from "@/components/ui/PageLoader";

// Form Validation Schema
const formSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    university: z.string().min(2, "University name is required"),
    uniqueId: z.string().min(1, "Registration Number/Unique ID is required"),
    course: z.string().min(1, "Course is required"),
    year: z.string().min(1, "Year is required"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    category: z.enum(["ieee-cs", "ieee", "non-ieee"]),
    ieeeId: z.string().optional(),
    preference1: z.enum(["Debate", "Prompt Engineering"], {
      required_error: "Please select your first preference",
    }),
    preference2: z.enum(["Debate", "Prompt Engineering"], {
      required_error: "Please select your second preference",
    }),
  })
  .refine(
    (data) => {
      if (data.category === "ieee-cs" || data.category === "ieee") {
        return !!data.ieeeId && data.ieeeId.trim().length > 0;
      }
      return true;
    },
    {
      message: "IEEE Membership ID is required for IEEE members",
      path: ["ieeeId"],
    },
  );

type FormValues = z.infer<typeof formSchema>;

const Registration = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // State
  const [isLoaded, setIsLoaded] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [cooldown, setCooldown] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get category from URL or default to 'non-ieee'
  const defaultCategory =
    (searchParams.get("category") as "ieee-cs" | "ieee" | "non-ieee") ||
    "non-ieee";

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      university: "",
      uniqueId: "",
      course: "",
      year: "",
      phone: "",
      category: defaultCategory,
      ieeeId: "",
      preference1: undefined,
      preference2: undefined,
    },
  });

  const category = form.watch("category");
  const preference1 = form.watch("preference1");

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("techx_registration_data");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      form.reset(parsedData);
      const savedStep = localStorage.getItem("techx_registration_step");
      if (savedStep === "2") {
        setStep(2);
      }
    }
  }, [form]);

  // Clear IEEE ID error when switching categories
  useEffect(() => {
    if (category === "non-ieee") {
      form.clearErrors("ieeeId");
      form.setValue("ieeeId", "");
    }
  }, [category, form]);

  // Handle Cooldown Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  // Handle Step 1 Submission (Save & Next)
  const onStep1Submit = (data: FormValues) => {
    localStorage.setItem("techx_registration_data", JSON.stringify(data));
    localStorage.setItem("techx_registration_step", "2");
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        toast({
          variant: "destructive",
          title: "File too large",
          description: "Please upload an image smaller than 5MB.",
        });
        return;
      }
      setReceiptFile(file);
    }
  };

  // Handle Final Submission (Upload & Submit to Google Forms)
  const handleFinalSubmit = async () => {
    if (!receiptFile) {
      toast({
        variant: "destructive",
        title: "Receipt Required",
        description: "Please upload your payment screenshot to proceed.",
      });
      return;
    }

    setIsSubmitting(true);
    const formData = form.getValues();

    try {
      // 1. Upload to Cloudinary
      const cloudinaryFormData = new FormData();
      cloudinaryFormData.append("file", receiptFile);
      cloudinaryFormData.append("upload_preset", "tech_x");
      cloudinaryFormData.append("cloud_name", "drwn4e2qq");
      cloudinaryFormData.append("folder", "receipt");

      const uploadRes = await fetch(
        "https://api.cloudinary.com/v1_1/drwn4e2qq/image/upload",
        {
          method: "POST",
          body: cloudinaryFormData,
        },
      );

      if (!uploadRes.ok) throw new Error("Image upload failed");
      const uploadJson = await uploadRes.json();
      const imageUrl = uploadJson.secure_url;

      // 2. Submit to Google Forms
      const googleFormUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSeq0jBRmqyq_Np5balcTKc4Ex_FG4-feyXI6z4m9CSAzpFl-Q/formResponse";
      const googleFormData = new URLSearchParams();

      googleFormData.append("entry.292244424", formData.name);
      googleFormData.append("entry.564921852", formData.email);
      googleFormData.append("entry.56087323", formData.university);
      googleFormData.append("entry.1880609480", formData.uniqueId);
      googleFormData.append("entry.353806949", formData.course);
      googleFormData.append("entry.2110524232", formData.year);
      googleFormData.append("entry.1586340470", formData.phone);
      googleFormData.append("entry.551794449", formData.preference1);
      googleFormData.append("entry.1741232484", formData.preference2);
      googleFormData.append("entry.1693092735", imageUrl);

      if (formData.ieeeId) {
        googleFormData.append("entry.1047990154", formData.ieeeId);
      }

      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: googleFormData.toString(),
      });

      // 3. Success & Cleanup
      localStorage.removeItem("techx_registration_data");
      localStorage.removeItem("techx_registration_step");

      toast({
        title: "Registration Successful!",
        description: "We have received your details and payment receipt.",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description:
          "Something went wrong. Please try again or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageLoader onLoadComplete={() => setIsLoaded(true)} />
      <div
        className={`min-h-screen relative transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <NeuralBackground />
        <FloatingParticles />
        <Navigation />

        <main className="pt-24 pb-20 relative z-10">
          <div className="container max-w-2xl mx-auto px-4 relative flex flex-col">
            <Button
              variant="ghost"
              className="w-fit mb-6 hover:bg-primary/10"
              onClick={() => {
                if (step === 2) {
                  setStep(1);
                  localStorage.setItem("techx_registration_step", "1");
                } else {
                  navigate("/");
                }
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {step === 2 ? "Back to Details" : "Back to Event"}
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl flex-1"
            >
              <div className="text-center mb-8">
                <h1 className="font-poppins text-3xl font-bold mb-2">
                  {step === 1 ? "Event Registration" : "Payment & Confirmation"}
                </h1>
                <p className="text-muted-foreground">
                  {step === 1
                    ? "Complete your details to secure your spot at TechX 2025"
                    : "Finalize your registration by verifying payment"}
                </p>

                {/* Step Indicator */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  <div
                    className={`h-2 w-12 rounded-full transition-colors ${step === 1 ? "bg-primary shadow-[0_0_10px_rgba(119,37,131,0.5)]" : "bg-primary/20"}`}
                  />
                  <div
                    className={`h-2 w-12 rounded-full transition-colors ${step === 2 ? "bg-primary shadow-[0_0_10px_rgba(119,37,131,0.5)]" : "bg-primary/20"}`}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onStep1Submit)}
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-white/10 border-white/20 focus:border-primary/50 transition-all text-white placeholder:text-white/30"
                                    placeholder="John Doe"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-white/10 border-white/20 focus:border-primary/50 transition-all text-white placeholder:text-white/30"
                                    placeholder="john@example.com"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone (WhatsApp)</FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-white/10 border-white/20 focus:border-primary/50 transition-all text-white placeholder:text-white/30"
                                    placeholder="9876543210"
                                    {...field}
                                    maxLength={10}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="uniqueId"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Reg No / Unique ID</FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-white/10 border-white/20 focus:border-primary/50 transition-all text-white placeholder:text-white/30"
                                    placeholder="e.g. 2347111"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="university"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>University / College</FormLabel>
                              <FormControl>
                                <Input
                                  className="bg-white/10 border-white/20 focus:border-primary/50 transition-all text-white placeholder:text-white/30"
                                  placeholder="CHRIST (Deemed to be University)"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="course"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Course / Branch</FormLabel>
                                <FormControl>
                                  <Input
                                    className="bg-white/10 border-white/20 focus:border-primary/50 transition-all text-white placeholder:text-white/30"
                                    placeholder="e.g. B.Tech CSE"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="year"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Year of Study</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="bg-white/10 border-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white">
                                      <SelectValue placeholder="Select Year" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-zinc-950 border-white/20 backdrop-blur-2xl shadow-2xl">
                                    <SelectItem
                                      value="1"
                                      className="focus:bg-primary/20 focus:text-white cursor-pointer py-4 text-base"
                                    >
                                      1st Year
                                    </SelectItem>
                                    <SelectItem
                                      value="2"
                                      className="focus:bg-primary/20 focus:text-white cursor-pointer py-4 text-base"
                                    >
                                      2nd Year
                                    </SelectItem>
                                    <SelectItem
                                      value="3"
                                      className="focus:bg-primary/20 focus:text-white cursor-pointer py-4 text-base"
                                    >
                                      3rd Year
                                    </SelectItem>
                                    <SelectItem
                                      value="4"
                                      className="focus:bg-primary/20 focus:text-white cursor-pointer py-4 text-base"
                                    >
                                      4th Year
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/10">
                          <h3 className="font-semibold text-lg">
                            Registration Category
                          </h3>

                          <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0 border border-white/10 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer bg-white/5">
                                      <FormControl>
                                        <RadioGroupItem value="ieee-cs" />
                                      </FormControl>
                                      <FormLabel className="font-medium cursor-pointer text-white/90">
                                        IEEE CS Member
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0 border border-white/10 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer bg-white/5">
                                      <FormControl>
                                        <RadioGroupItem value="ieee" />
                                      </FormControl>
                                      <FormLabel className="font-medium cursor-pointer text-white/90">
                                        IEEE Member
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0 border border-white/10 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer bg-white/5">
                                      <FormControl>
                                        <RadioGroupItem value="non-ieee" />
                                      </FormControl>
                                      <FormLabel className="font-medium cursor-pointer text-white/90">
                                        Non-IEEE
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {(category === "ieee-cs" || category === "ieee") && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              <FormField
                                control={form.control}
                                name="ieeeId"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>IEEE Membership ID</FormLabel>
                                    <FormControl>
                                      <Input
                                        className="bg-white/10 border-white/20 focus:border-primary/50 transition-all text-white placeholder:text-white/30"
                                        placeholder="Enter your IEEE ID"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </motion.div>
                          )}
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/10">
                          <h3 className="font-semibold text-lg">
                            Event Preferences
                          </h3>
                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="preference1"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Preference 1</FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger className="bg-white/10 border-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white">
                                        <SelectValue placeholder="Select First Preference" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-zinc-950 border-white/20 backdrop-blur-2xl shadow-2xl">
                                      <SelectItem
                                        value="Debate"
                                        className="focus:bg-primary/20 focus:text-white cursor-pointer py-4 text-base"
                                      >
                                        Tech Debate
                                      </SelectItem>
                                      <SelectItem
                                        value="Prompt Engineering"
                                        className="focus:bg-primary/20 focus:text-white cursor-pointer py-4 text-base"
                                      >
                                        Prompt Engineering
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="preference2"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Preference 2</FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger className="bg-white/10 border-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white">
                                        <SelectValue placeholder="Select Second Preference" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-zinc-950 border-white/20 backdrop-blur-2xl shadow-2xl">
                                      <SelectItem
                                        value="Debate"
                                        disabled={preference1 === "Debate"}
                                        className="focus:bg-primary/20 focus:text-white cursor-pointer py-4 text-base"
                                      >
                                        Tech Debate
                                      </SelectItem>
                                      <SelectItem
                                        value="Prompt Engineering"
                                        disabled={
                                          preference1 === "Prompt Engineering"
                                        }
                                        className="focus:bg-primary/20 focus:text-white cursor-pointer py-4 text-base"
                                      >
                                        Prompt Engineering
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full text-lg py-6 mt-6 bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(119,37,131,0.3)] transition-all hover:shadow-[0_0_30px_rgba(119,37,131,0.5)]"
                          size="lg"
                        >
                          Continue to Payment
                        </Button>
                      </form>
                    </Form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-8"
                  >
                    <Alert className="bg-primary/10 border-primary/20 backdrop-blur-sm">
                      <AlertCircle className="h-4 w-4 text-primary" />
                      <AlertTitle>Details Temporarily Saved</AlertTitle>
                      <AlertDescription>
                        Complete the payment and upload the screenshot to
                        finalize.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold font-poppins">
                        1. Make Payment
                      </h3>
                      <div className="p-6 border border-white/10 rounded-xl bg-white/5 text-center space-y-4 backdrop-blur-sm">
                        <p className="text-muted-foreground">
                          Click the button below to pay via our secure portal.
                        </p>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="heroOutline"
                              size="lg"
                              className="w-full sm:w-auto"
                              onClick={() => setCooldown(10)} // Reset cooldown when modal opens
                            >
                              Proceed to Payment Portal
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="bg-black/95 border-white/20 backdrop-blur-xl">
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-xl">
                                Redirecting to Payment
                              </AlertDialogTitle>
                              <AlertDialogDescription className="text-base mt-2">
                                You are about to be redirected to the secure
                                payment portal.
                                <br />
                                <br />
                                <strong className="text-primary">
                                  Important:
                                </strong>
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                  <li>Complete the payment successfully.</li>
                                  <li>
                                    Take a screenshot of the payment receipt.
                                  </li>
                                  <li>
                                    Come back to this tab to upload the receipt.
                                  </li>
                                </ul>
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter className="mt-6">
                              <AlertDialogCancel className="border-white/10 hover:bg-white/10">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={(e) => {
                                  if (cooldown > 0) {
                                    e.preventDefault();
                                    return;
                                  }
                                  window.open("#", "_blank");
                                }}
                                disabled={cooldown > 0}
                              >
                                {cooldown > 0
                                  ? `Please read (${cooldown}s)`
                                  : "I Understand, Proceed"}
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                        <p className="text-xs text-muted-foreground mt-2 italic">
                          *Please take a screenshot of your payment receipt.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold font-poppins">
                        2. Upload Receipt
                      </h3>
                      <div
                        className={`
                          border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer backdrop-blur-sm
                          ${receiptFile ? "border-primary bg-primary/5 shadow-[0_0_20px_rgba(119,37,131,0.1)]" : "border-white/20 hover:border-primary/50 hover:bg-white/5"}
                        `}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />

                        {receiptFile ? (
                          <div className="flex flex-col items-center gap-2 text-primary">
                            <CheckCircle2 className="w-12 h-12 animate-in zoom-in" />
                            <span className="font-semibold text-lg truncate max-w-full px-4">
                              {receiptFile.name}
                            </span>
                            <span className="text-sm text-muted-foreground underline">
                              Click to change file
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2 text-muted-foreground">
                            <UploadCloud className="w-12 h-12 mb-2" />
                            <span className="font-semibold text-lg text-white/90">
                              Click to upload screenshot
                            </span>
                            <span className="text-sm">JPG, PNG (Max 5MB)</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      onClick={handleFinalSubmit}
                      className="w-full text-lg py-6 bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(119,37,131,0.3)] transition-all hover:shadow-[0_0_30px_rgba(119,37,131,0.5)]"
                      size="lg"
                      disabled={isSubmitting || !receiptFile}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting Registration...
                        </>
                      ) : (
                        "Complete Registration"
                      )}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default Registration;
