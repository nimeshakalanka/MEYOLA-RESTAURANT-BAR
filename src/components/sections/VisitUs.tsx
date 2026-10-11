"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Clock,
  Compass,
  CheckCircle2,
  Send,
  MessageSquare,
  Calendar,
  Users,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  seatingArea: string;
  notes: string;
}

export function VisitUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "18:00",
    guests: "2",
    seatingArea: "courtyard",
    notes: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.phone.trim()) {
      errs.phone = "Please enter a valid phone or WhatsApp number";
    } else if (formData.phone.trim().length < 8) {
      errs.phone = "Phone number is too short";
    }
    if (!formData.date) errs.date = "Please select a date";
    if (!formData.time) errs.time = "Please select a time";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous booking acknowledgment
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "18:00",
      guests: "2",
      seatingArea: "courtyard",
      notes: "",
    });
  };

  // WhatsApp quick-link message
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    `Hello Meyola! I would like to reserve a table for ${formData.guests || "2"} guests on ${formData.date || "today"} around ${formData.time || "6:00 PM"}. Name: ${formData.name || "Guest"}`
  )}`;

  return (
    <section
      id="visit"
      className="section-sand py-24 sm:py-32 relative overflow-hidden"
      aria-label="Visit Us and Table Reservations"
    >
      <div className="container-meyola">
        <SectionHeading
          overline="Join Our Table"
          title="Visit Us in Weligama"
          subtitle="Tucked away just 250 meters from the surf break in Palana. Reserve online below or connect directly with our concierge over WhatsApp."
          align="center"
          theme="sand"
          withUnderline
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* ── Left Column: Contact Details & Styled Map Block ── */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Direct Contact Cards */}
            <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-midnight-lagoon/15 p-6 sm:p-8 shadow-xl flex flex-col gap-6">
              <h3 className="font-display text-2xl font-medium text-midnight-lagoon">
                Location &amp; Hours
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-coral-ember/15 text-coral-ember flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-sans uppercase font-bold tracking-wider text-midnight-lagoon block">
                    Address
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-midnight-lagoon/80 mt-1">
                    {siteConfig.address.full}
                  </p>
                  <span className="inline-block mt-1 text-[0.72rem] font-sans font-semibold text-coral-ember">
                    {siteConfig.address.proximity}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-turmeric/15 text-turmeric flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-sans uppercase font-bold tracking-wider text-midnight-lagoon block">
                    Direct Telephone
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="text-xs sm:text-sm font-sans font-semibold text-midnight-lagoon hover:text-coral-ember transition-colors mt-1 block"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <span className="text-[0.68rem] text-midnight-lagoon/50 block mt-0.5">
                    Verified owner contact number
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sea-glass/25 text-midnight-lagoon flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-sans uppercase font-bold tracking-wider text-midnight-lagoon block">
                    Operating Schedule
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-midnight-lagoon/80 mt-1">
                    Monday – Friday: {siteConfig.hours.weekday}
                  </p>
                  <p className="text-xs sm:text-sm font-sans text-midnight-lagoon/80">
                    Saturday – Sunday: {siteConfig.hours.weekend}
                  </p>
                  <p className="text-[0.68rem] font-sans text-midnight-lagoon/60 mt-1">
                    Kitchen closes: {siteConfig.hours.kitchenCloses} · Golden Hour: {siteConfig.hours.goldenHour}
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Concierge Button */}
              <div className="pt-2 border-t border-midnight-lagoon/10">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Meyola,%20I%20would%20like%20to%20reserve%20a%20table%20in%20Weligama`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#20ba59] transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reserve on WhatsApp Concierge</span>
                </a>
              </div>
            </div>

            {/* Styled Map Card */}
            <div className="relative rounded-3xl overflow-hidden bg-midnight-lagoon border border-midnight-lagoon/20 p-6 shadow-xl text-sand flex flex-col justify-between min-h-[220px]">
              {/* Stylized background contour lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#7FC8B8_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[0.7rem] font-sans uppercase font-bold tracking-widest text-turmeric">
                    Palana, Weligama Bay
                  </span>
                  <span className="text-xs font-sans text-sand/60">
                    {siteConfig.priceRange}
                  </span>
                </div>
                <h4 className="font-display text-xl text-sand font-medium">
                  Find Your Way to Meyola
                </h4>
                <p className="text-xs font-sans text-sand/75 mt-1">
                  Just off the main coastal road, right next to the surf beach break and catamaran bay.
                </p>
              </div>

              <div className="relative z-10 pt-4 mt-4 border-t border-sand/15 flex items-center justify-between">
                <span className="text-xs font-sans text-sea-glass flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  5.9723° N, 80.4285° E
                </span>

                <a
                  href={siteConfig.contact.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans uppercase font-bold tracking-wider text-sand hover:text-coral-ember transition-colors py-1.5 px-3 rounded-full bg-white/10 hover:bg-white/20"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Right Column: Interactive Reservation Form ── */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white/90 backdrop-blur-md border border-midnight-lagoon/15 p-6 sm:p-10 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-[0.68rem] font-sans uppercase font-bold tracking-[0.2em] text-coral-ember block mb-1">
                  Instant Table Request
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-midnight-lagoon">
                  Reserve Your Evening Table
                </h3>
                <p className="text-xs sm:text-sm font-sans text-midnight-lagoon/75 mt-1">
                  Join us for sunset arrack cocktails, fresh catches, or generational Ceylon curries.
                </p>
              </div>

              {/* Animated Success View */}
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-sea-glass/25 text-midnight-lagoon flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-9 h-9 text-coral-ember" />
                    </div>

                    <h4 className="font-display text-2xl font-semibold text-midnight-lagoon mb-2">
                      Table Request Received!
                    </h4>
                    <p className="text-xs sm:text-sm font-sans text-midnight-lagoon/80 max-w-md mb-6 leading-relaxed">
                      Thank you, <strong className="text-midnight-lagoon">{formData.name}</strong>. We have noted your table for <strong className="text-midnight-lagoon">{formData.guests} guests</strong> on <strong className="text-midnight-lagoon">{formData.date}</strong> at <strong className="text-midnight-lagoon">{formData.time}</strong>.
                    </p>

                    <div className="p-4 rounded-2xl bg-sand/60 border border-midnight-lagoon/10 text-xs font-sans text-midnight-lagoon/80 max-w-md w-full text-left mb-6">
                      <span className="font-bold block text-midnight-lagoon uppercase tracking-wider text-[0.68rem] mb-1">
                        Reservation Summary
                      </span>
                      <p>• Contact: {formData.phone}</p>
                      <p>• Seating Preference: {formData.seatingArea === "courtyard" ? "Open-Air Courtyard" : "Palm Garden Terrace"}</p>
                      {formData.notes && <p>• Special Note: {formData.notes}</p>}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#20ba59] transition-colors shadow-md"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Confirm via WhatsApp</span>
                      </a>
                      <button
                        onClick={handleReset}
                        className="px-5 py-3 rounded-full border border-midnight-lagoon/30 text-midnight-lagoon text-xs font-sans font-semibold uppercase tracking-wider hover:bg-midnight-lagoon hover:text-sand transition-colors"
                      >
                        New Reservation
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-4"
                  >
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-sans font-bold uppercase tracking-wider text-midnight-lagoon mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-xl bg-sand/30 border text-midnight-lagoon placeholder-midnight-lagoon/40 text-xs sm:text-sm font-sans focus:outline-none transition-colors ${
                            errors.name
                              ? "border-red-500 bg-red-50/50"
                              : "border-midnight-lagoon/20 focus:border-coral-ember"
                          }`}
                        />
                        {errors.name && (
                          <span className="text-[0.68rem] text-red-600 mt-1 flex items-center gap-1 font-sans">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-sans font-bold uppercase tracking-wider text-midnight-lagoon mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+94 7X XXX XXXX"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-xl bg-sand/30 border text-midnight-lagoon placeholder-midnight-lagoon/40 text-xs sm:text-sm font-sans focus:outline-none transition-colors ${
                            errors.phone
                              ? "border-red-500 bg-red-50/50"
                              : "border-midnight-lagoon/20 focus:border-coral-ember"
                          }`}
                        />
                        {errors.phone && (
                          <span className="text-[0.68rem] text-red-600 mt-1 flex items-center gap-1 font-sans">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Date, Time & Guests */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-sans font-bold uppercase tracking-wider text-midnight-lagoon mb-1.5">
                          Date *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            required
                            value={formData.date}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value })
                            }
                            className={`w-full px-3 py-3 rounded-xl bg-sand/30 border text-midnight-lagoon text-xs sm:text-sm font-sans focus:outline-none transition-colors ${
                              errors.date
                                ? "border-red-500 bg-red-50/50"
                                : "border-midnight-lagoon/20 focus:border-coral-ember"
                            }`}
                          />
                        </div>
                        {errors.date && (
                          <span className="text-[0.68rem] text-red-600 mt-1 flex items-center gap-1 font-sans">
                            <AlertCircle className="w-3 h-3" /> {errors.date}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-sans font-bold uppercase tracking-wider text-midnight-lagoon mb-1.5">
                          Time *
                        </label>
                        <select
                          value={formData.time}
                          onChange={(e) =>
                            setFormData({ ...formData, time: e.target.value })
                          }
                          className="w-full px-3 py-3 rounded-xl bg-sand/30 border border-midnight-lagoon/20 text-midnight-lagoon text-xs sm:text-sm font-sans focus:outline-none focus:border-coral-ember"
                        >
                          <option value="12:00">12:00 PM (Lunch)</option>
                          <option value="13:30">01:30 PM (Lunch)</option>
                          <option value="17:00">05:00 PM (Sunset / Golden Hour)</option>
                          <option value="18:00">06:00 PM (Sunset Hour)</option>
                          <option value="19:30">07:30 PM (Dinner Rush)</option>
                          <option value="20:30">08:30 PM (Dinner)</option>
                          <option value="21:30">09:30 PM (Late Night Bar)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-sans font-bold uppercase tracking-wider text-midnight-lagoon mb-1.5">
                          Guests *
                        </label>
                        <select
                          value={formData.guests}
                          onChange={(e) =>
                            setFormData({ ...formData, guests: e.target.value })
                          }
                          className="w-full px-3 py-3 rounded-xl bg-sand/30 border border-midnight-lagoon/20 text-midnight-lagoon text-xs sm:text-sm font-sans focus:outline-none focus:border-coral-ember"
                        >
                          <option value="1">1 Guest (Solo)</option>
                          <option value="2">2 Guests (Couple)</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6">6 Guests</option>
                          <option value="8+">8+ Guests (Group)</option>
                        </select>
                      </div>
                    </div>

                    {/* Seating preference */}
                    <div>
                      <label className="block text-xs font-sans font-bold uppercase tracking-wider text-midnight-lagoon mb-1.5">
                        Seating Preference
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, seatingArea: "courtyard" })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-sans font-semibold border transition-all text-center ${
                            formData.seatingArea === "courtyard"
                              ? "bg-midnight-lagoon text-sand border-midnight-lagoon shadow"
                              : "bg-sand/30 text-midnight-lagoon/80 border-midnight-lagoon/20 hover:border-midnight-lagoon/40"
                          }`}
                        >
                          Open-Air Courtyard
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, seatingArea: "terrace" })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-sans font-semibold border transition-all text-center ${
                            formData.seatingArea === "terrace"
                              ? "bg-midnight-lagoon text-sand border-midnight-lagoon shadow"
                              : "bg-sand/30 text-midnight-lagoon/80 border-midnight-lagoon/20 hover:border-midnight-lagoon/40"
                          }`}
                        >
                          Garden Palm Terrace
                        </button>
                      </div>
                    </div>

                    {/* Special Notes / Dietary Requests */}
                    <div>
                      <label className="block text-xs font-sans font-bold uppercase tracking-wider text-midnight-lagoon mb-1.5">
                        Dietary Requests or Special Occasion
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Vegetarian curries, anniversary, birthday celebration, mild spice..."
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-sand/30 border border-midnight-lagoon/20 text-midnight-lagoon placeholder-midnight-lagoon/40 text-xs sm:text-sm font-sans focus:outline-none focus:border-coral-ember resize-none"
                      />
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="coral"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full justify-center"
                      >
                        {isSubmitting ? (
                          <span>Reserving Your Table...</span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Confirm Table Reservation
                          </span>
                        )}
                      </Button>
                      <p className="text-center text-[0.68rem] font-sans text-midnight-lagoon/50 mt-2.5">
                        No prepayment required. Confirmation sent instantly via WhatsApp or phone.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
