"use client"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal"
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react"
import { Input } from "./ui/input"
import { Label } from "@radix-ui/react-label"
import { FormEvent } from "react"
import { cn } from "@/lib/utils"

export default function AnimatedModalDemo() {

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className="py-1 flex items-center justify-center">
      <Modal>
      <ModalTrigger className="bg-white text-black px-5 py-2 text-sm rounded-3xl shadow-[0px_4px_10px_rgba(139,90,74,0.5)] hover:shadow-[0px_6px_15px_rgba(139,90,74,0.7)] transition-all">
  <strong className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 text-black z-20">
    Get Started
  </strong>
  <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
    Osmium
  </div>
</ModalTrigger>

        <ModalBody>
          <ModalContent className="p-8 max-w-2xl">
            <div className="flex flex-col justify-center items-center space-y-4">

              <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">Welcome to Osmium</h2>
              <p className="text-neutral-600 text-lg max-w-md text-center dark:text-neutral-300">
                Have Questions? We're Here to Help!
              </p>

              <form className="w-full mt-6" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
                  <LabelInputContainer>
                    <Label htmlFor="firstname">First name</Label>
                    <Input id="firstname" placeholder="Enter firstname" type="text" className="h-12 text-lg" />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="lastname">Last name</Label>
                    <Input id="lastname" placeholder="Enter lastname" type="text" className="h-12 text-lg" />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-6">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" placeholder="Enter your email" type="email" className="h-12 text-lg" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-6">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input id="phoneNumber" placeholder="Enter phone number" type="tel" className="h-12 text-lg" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                  <Label htmlFor="message">Message</Label>
                  <Input id="message" placeholder="Message" type="text" className="h-12 text-lg" />
                </LabelInputContainer>

                <button
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-lg h-14 text-xl font-semibold shadow-md transition duration-300 hover:scale-105"
                  type="submit"
                >
                  Submit &rarr;
                  <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />


              </form>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-4 py-2 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-lg text-lg w-36">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-lg px-4 py-2 rounded-lg border border-black w-36">
              Book Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
}
