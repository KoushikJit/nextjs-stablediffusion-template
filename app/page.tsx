"use client"
import Instructions from "@/components/instructions";
import { ModeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import axios from "axios";
import { CornerDownLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const [inferenceSteps, setInferenceSteps] = useState(10);
  const [guidanceScale, setGuidanceScale] = useState(8);

  const promptRef = useRef<HTMLTextAreaElement>(null);
  const negativePromptRef = useRef<HTMLTextAreaElement>(null);
  const onSubmit = async () => {
    
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="fixed z-30 top-2 right-2 w-full flex flex-row-reverse hover:opacity-100 gap-4 items-center">
        <a className='border-2 p-1 border-[#ffffff] rounded-full' href="https://www.youtube.com/channel/UCfKRZUU78XIcQvh1_QsdQyA" target="_blank" rel="noopener noreferrer"
          style={{
            filter: 'drop-shadow(1px 1px 2px #00000088)'
          }}
        >
          <Image src={'/icon.png'} width={400} height={400} className='w-8 h-8' alt={''} />
        </a>
        <ModeToggle />
      </div>
      <div className="grid grid-cols-[250px_1fr] w-full gap-4 p-4 flex-1">
        <fieldset className="flex flex-col gap-6 rounded-lg border p-4 h-full">
          <legend className="-ml-1 px-1 text-sm font-medium text-red-700">
            Generate
          </legend>
          <div className="flex flex-col gap-3 h-1/3 max-h-56">
            <Label>Prompt</Label>
            <Textarea ref={promptRef} placeholder="Describe the image..." className="flex-1" />
          </div>
          <div className="flex flex-col gap-3 h-1/4 max-h-32">
            <Label>Negative Prompt</Label>
            <Textarea ref={negativePromptRef} placeholder="" className="flex-1" />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Inference Steps [{inferenceSteps}]</Label>
            <Slider step={5} min={5} max={50} defaultValue={[inferenceSteps]} onValueChange={(value) => setInferenceSteps(value[0])} />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Guidance Scale [{
              guidanceScale < 5 ? "Low " + guidanceScale
                : guidanceScale < 16 ? "Mid " + guidanceScale
                  : "Hi " + guidanceScale
            }]</Label>
            <Slider step={1} min={0} max={20} defaultValue={[guidanceScale]} onValueChange={(value) => setGuidanceScale(value[0])} />
          </div>
          <Button onClick={(onSubmit)}>Submit</Button>
          <Separator />
          <div className="overflow-scroll min-h-28 max-h-96">
            <Instructions />
          </div>
        </fieldset>
        <div className="relative group flex flex-col items-center justify-center duration-500 p-2">
          {/* right side grid  */}
          {
            !isLoading ?
              <Image
                src={imageUrl ? imageUrl : "/placeholder.svg"}
                alt="Image"
                width="1920"
                height="1920"
                className="h-full w-full object-contain transition-all duration-200 image-shadow"
              />
              :
              <Image
                src="/loader.gif"
                alt="Image"
                width="60"
                height="60"
                className="transition-all duration-75"
              ></Image>
          }
          {imageUrl && !isLoading &&
            <a href={imageUrl} className={cn(buttonVariants({ variant: "default" }), "absolute opacity-0 group-hover:opacity-100")}
              download={promptRef.current?.value + ".jpg"}
            >
              Download
            </a>
          }
        </div>
      </div>

    </main>
  );
}
