
import Container from '@/components/container'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import React from 'react'
import Image from 'next/image'
import Iframe from 'react-iframe'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
const Quote = dynamic(() => import('@/components/quote'))
const Link = dynamic(() => import('next/link'))
const Poll = dynamic(() => import('@/components/poll'))

const Handmaid = async () => {
  const polls = await fetch(`${ process.env.SITE_URL }/api/poll?page=handmaid`, {
    cache: 'no-store'
  }).then(res => res.json()).catch(err => console.log(err))

  return (
    <Container>
      <div className="max-w-screen-md mx-auto">
        <h1 className="mt-2 mb-12 text-3xl font-semibold tracking-tight text-center text-brand-primary dark:text-white lg:text-4xl lg:leading-snug">
          The Handmaid's Tale: Unveiling Feminist Themes in a Dystopian World
        </h1>
        <div className="w-full my-12">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/gilead-hero-flag.png"
              fill
              alt="Image"
              className="object-cover rounded-md"
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col gap-8 mx-auto my-3 prose dark:prose-invert">
          <p>
            The <strong>Handmaid's Tale"</strong> is a thought-provoking and impactful television series that delves into a dystopian society where women's rights and autonomy have been stripped away. With its compelling narrative and powerful storytelling, the show serves as a platform to explore various feminist themes, shedding light on gender inequality, reproductive rights, and women's resistance. In this analysis, we will navigate through the key elements of the series, examining its portrayal of a patriarchal regime and the resilience of women within this oppressive world.
          </p>
          <div className="w-full mb-12">
            <AspectRatio ratio={16 / 9}>
              <Iframe url="https://www.youtube.com/embed/dVLiDETfx1c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='object-cover w-full h-full rounded-md' ></Iframe>
            </AspectRatio>
          </div>
          <h2 className='gap-0 text-2xl font-semibold tracking-tight text-left text-brand-primary dark:text-white lg:text-3xl lg:leading-snug'>Gender Inequality and Oppression</h2>
          <p>
            <strong>"The Handmaid's Tale"</strong> exposes the stark reality of gender inequality by presenting a society where women are reduced to the roles of mere vessels for reproduction. The women, known as Handmaids, are subjected to dehumanizing practices and a strict hierarchy that subjugates them to men's control. This portrayal serves as a powerful commentary on the real-world struggles faced by women, highlighting the importance of gender equality and dismantling oppressive structures.
          </p>
          <div className="w-full mb-8">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/handmaid.png"
                fill
                alt="Image"
                className="object-cover rounded-md"
              />
            </AspectRatio>
          </div>
          <h2 className='mt-2 text-2xl font-semibold tracking-tight text-left text-brand-primary dark:text-white lg:text-3xl lg:leading-snug'>Reproductive Rights and Autonomy</h2>
          <p>
            One of the central themes explored in <strong>"The Handmaid's Tale"</strong> is the control over reproductive rights. The show raises critical questions about a society that regulates women's bodies, emphasizing the significance of a woman's agency in making decisions about her own reproductive choices. By examining the plight of the Handmaids, the series prompts discussions on reproductive autonomy and the need to protect and uphold women's right to choose.
          </p>
          <Quote author='Margaret Atwood' text="We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories." />
          <h2 className='mt-2 text-2xl font-semibold tracking-tight text-left text-brand-primary dark:text-white lg:text-3xl lg:leading-snug'>Character Analyses</h2>
          <p>
            The show's compelling characters contribute to its profound exploration of feminist themes. Offred, the protagonist, showcases the strength and resilience of women as she navigates through the oppressive regime, fighting for her own agency and seeking connections with other women. Serena Joy, on the other hand, represents the complex interplay of power dynamics and the internalized oppression experienced by some women in the society. Aunt Lydia's character reveals the complexities of complicity and the use of ideology to maintain control.
          </p>
          <p>
            <strong>"The Handmaid's Tale"</strong> serves as a powerful platform for feminist analysis, shedding light on the pressing issues of gender inequality, reproductive rights, and women's resistance. Through its captivating storytelling and thought-provoking exploration of characters, the series invites viewers to reflect on the importance of equality, autonomy, and the ongoing struggle for women's rights. By delving into the dystopian world of "The Handmaid's Tale," we are reminded of the urgency to challenge oppressive systems and work towards a more equitable future.
          </p>
        </div>
      </div>
      <h2 className='mt-12 mb-4 text-2xl font-semibold tracking-tight text-left text-brand-primary dark:text-white lg:text-3xl lg:leading-snug'>Polls</h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {
          polls?.map((poll: any) => {
            return (
              <Poll
                key={poll?.id}
                poll={poll}
              />
            )
          })
        }
      </div>
      <div className="flex justify-end w-full mt-8">
        <div className='flex gap-4'>
          <Button asChild variant='link'>
            <Link href='san-junipero'><ChevronLeft className='w-5 h-5' />San Junipero</Link>
          </Button>
          <Button asChild variant='link'>
            <Link href='conclusion'>Conclusion <ChevronRight className='w-5 h-5' /></Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Handmaid

