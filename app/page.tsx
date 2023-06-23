import Link from "next/link"
import Image from "next/image"

import { buttonVariants } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default async function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:px-20 md:py-20">
      <div className="flex gap-12">
        <div className="w-[500px]">
          <AspectRatio ratio={4 / 3}>
            <Image
              src="/english-summative-homepage-image.png"
              fill
              alt="Image"
              className="object-cover rounded-md"
            />
          </AspectRatio>
        </div>
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter max-w-prose md:text-5xl">
            Unveiling Dystopia & Feminist Narratives
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground mb-4">
            Explore the Worlds of &quot;The Handmaid&quot;s Tale,&quot; &quot;The Tempest,&quot; and &quot;The Modest Proposal&quot; through an Interactive Odyssey
          </p>
          <Link
            href='/marxist'
            className={buttonVariants()}
          >
            Begin Your Exploration
          </Link>
        </div>
      </div>
    </section>
  )
}
