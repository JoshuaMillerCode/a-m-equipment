"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function RequestForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-field-service", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to send request");
      }
      toast({
        title: "Success",
        description: "Service request sent successfully!",
      });
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="firstName"
            name="firstName"
            className="mt-1 bg-gray-50"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="lastName"
            name="lastName"
            className="mt-1 bg-gray-50"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company <span className="text-red-500">*</span>
        </label>
        <Input
          id="company"
          name="company"
          className="mt-1 bg-gray-50"
          required
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          className="mt-1 bg-gray-50"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone <span className="text-red-500">*</span>
        </label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 bg-gray-50"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Service Needs <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 bg-gray-50"
          required
          placeholder="Describe your service needs..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <Button type="submit" className="w-full bg-red-950 hover:bg-red-900">
        Submit Request
      </Button>
    </form>
  );
}
