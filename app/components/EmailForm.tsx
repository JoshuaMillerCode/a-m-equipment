"use client";

import { useState, useRef, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

export default function EmailForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    recipient: "",
    message: "",
  });

  const recipientOptions = [
    { value: "a&m", label: "A&M Equipment" },
    { value: "newton", label: "Newton" },
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Send email
  };

  return (
    <div className="md:w-1/2 md:pl-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">
                Recipient (Who should we send the email to?)
              </label>
              <div className="relative mb-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm pl-3 pr-10 py-2 text-left focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      ref={triggerRef}
                    >
                      {selectedRecipient ? selectedRecipient.label : "Select recipient..."}
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
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
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
                Email
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
                Phone
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
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
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