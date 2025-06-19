"use client";

import { useState, useRef, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export default function EmailForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    recipient: "a&mAR",
    subject: "",
    message: "",
  });

  const recipientOptions = [
    { value: "a&mAR", label: "Automation Request (A&M Equipment)" },
    { value: "a&mVM", label: "Value Maintenance Products (A&M Equipment)" },
    { value: "newton", label: "Newton VAS" },
  ];

  const selectedRecipient = recipientOptions.find(
    (opt) => opt.value === formData.recipient
  );

  // Ref and state for dropdown width
  const triggerRef = useRef(null);
  const [menuWidth, setMenuWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (triggerRef.current) {
      setMenuWidth((triggerRef.current as HTMLElement).offsetWidth);
    }
  }, [triggerRef.current]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.error) {
        throw new Error("Failed to send email");
      }
      toast({
        title: "Success",
        description: "Email sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        recipient: "a&mAR",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send email. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="md:w-1/2 md:pl-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">
                Recipient (Who should we send the email to?) <span className="text-red-500">*</span>
              </label>
              <div className="relative mb-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm pl-3 pr-10 py-2 text-left focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      ref={triggerRef}
                    >
                      {selectedRecipient ? selectedRecipient.label : recipientOptions[0].label}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent style={{ width: menuWidth }}>
                    {recipientOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        onSelect={() => setFormData({ ...formData, recipient: option.value })}
                        className={
                          formData.recipient === option.value
                            ? "bg-blue-100 text-blue-700"
                            : ""
                        }
                        defaultValue={"a&m"}
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label> 
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
  );
}