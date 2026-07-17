"use client"

import { useState } from "react"
import { sendEmail } from "@/app/actions/send-email"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Send, Loader2 } from "lucide-react"
import { ScrollAnimate } from "@/components/scroll-animate"

export function ContactSection() {
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    
    try {
      const result = await sendEmail(formData)
      
      if (result.error) {
        toast.error(result.error)
      } else {
        toast.success("Message sent successfully! I'll get back to you soon.")
        const form = document.getElementById("contact-section-form") as HTMLFormElement
        if (form) form.reset()
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimate variant="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
              Let's <span className="bg-[#FDB927] text-black px-3 py-1 inline-block">work together</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Have a project in mind, looking for a technical co-founder, or just want to say hi? Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate variant="fade-up" delay={0.1}>
          <form id="contact-section-form" action={handleSubmit} className="space-y-6 bg-white dark:bg-neutral-900 border-[3px] border-black dark:border-white p-6 md:p-10 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-black dark:text-white">Your Name</label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="John Doe" 
                  required 
                  className="h-14 border-[3px] border-black dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white rounded-xl focus-visible:ring-black dark:focus-visible:ring-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-black dark:text-white">Email Address</label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  className="h-14 border-[3px] border-black dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white rounded-xl focus-visible:ring-black dark:focus-visible:ring-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold text-black dark:text-white">Phone Number <span className="text-neutral-500 font-normal">(Optional)</span></label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="h-14 border-[3px] border-black dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white rounded-xl focus-visible:ring-black dark:focus-visible:ring-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold text-black dark:text-white">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="flex h-14 w-full items-center justify-between border-[3px] border-black dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-black dark:text-white rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="API & Backend">API & Backend</option>
                  <option value="System Architecture">System Architecture</option>
                  <option value="Performance Optimization">Performance Optimization</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="attachment" className="text-sm font-bold text-black dark:text-white">Project Scope / Supporting Docs <span className="text-neutral-500 font-normal">(Optional)</span></label>
                <Input 
                  id="attachment" 
                  name="attachment" 
                  type="file" 
                  accept=".pdf,.docx"
                  className="h-14 pt-3 border-[3px] border-black dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white rounded-xl focus-visible:ring-black dark:focus-visible:ring-white file:border-0 file:bg-transparent file:text-sm file:font-bold file:text-black dark:file:text-white file:mr-4 file:cursor-pointer hover:file:opacity-70"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-black dark:text-white">Message</label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Tell me about your project..." 
                required 
                className="min-h-[160px] resize-none border-[3px] border-black dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white rounded-xl p-4 focus-visible:ring-black dark:focus-visible:ring-white"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isPending}
              className="w-full h-16 bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 rounded-xl text-lg font-bold flex items-center justify-center gap-2 active:translate-y-[2px] transition-transform"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </ScrollAnimate>
      </div>
    </section>
  )
}
