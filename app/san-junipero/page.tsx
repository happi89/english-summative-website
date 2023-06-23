
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

const SanJunipero = async () => {
  const polls = await fetch(`${ process.env.SITE_URL }/api/poll?page=san-junipero`, {
    cache: 'no-store'
  }).then(res => res.json()).catch(err => console.log(err))

  return (
    <Container>
      <div className="max-w-screen-md mx-auto">
        <h1 className="mt-2 mb-12 text-3xl font-semibold tracking-tight text-center text-brand-primary dark:text-white lg:text-4xl lg:leading-snug">
          Unveiling the Depths of 'San Junipero': Exploring Love, Technology, and the Human Experience
        </h1>
        <div className="w-full my-12">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/san-junipero.jpeg"
              fill
              alt="Image"
              className="object-cover rounded-md"
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col gap-8 mx-auto my-3 prose dark:prose-invert">
          <p>
            Welcome to my analysis of the Black Mirror episode <strong>"San Junipero."</strong> This thought-provoking installment takes us on a journey through love, technology, and the complexities of the human experience. Set in a nostalgic beach town, the story tackles various social issues and raises profound questions about our existence.
          </p>
          <div className="w-full mb-12">
            <AspectRatio ratio={16 / 9}>
              <Iframe url="https://www.youtube.com/embed/5CZAmbA4SfU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='object-cover w-full h-full rounded-md' ></Iframe>
            </AspectRatio>
          </div>
          <h2 className='gap-0 text-2xl font-semibold tracking-tight text-left text-brand-primary dark:text-white lg:text-3xl lg:leading-snug'>LGBTQ+</h2>
          <p>
            At its core, <strong>"San Junipero"</strong> delves into the exploration of societal attitudes towards alternative lifestyles, particularly focusing on the experiences of LGBTQ+ individuals. The episode sheds light on the challenges faced by the gay community, portraying a time where social acceptance and understanding were limited. Through the characters of Yorkie and Kelly, the episode invites us to reflect on the significance of love and connection in the face of societal norms and prejudices.
          </p>
          <div className="w-full mb-8">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/yorkie-kelly.avif"
                fill
                alt="Image"
                className="object-cover rounded-md"
              />
            </AspectRatio>
          </div>
          <h2 className='mt-2 text-2xl font-semibold tracking-tight text-left text-brand-primary dark:text-white lg:text-3xl lg:leading-snug'>Euthanisia</h2>
          <p>
            Another thought-provoking theme tackled in <strong>"San Junipero"</strong> is the concept of euthanasia. The episode raises ethical questions surrounding the right to choose one's own destiny, even in the face of death. The virtual afterlife presented in San Junipero provides an escape from physical suffering and offers a choice for individuals to continue their existence beyond the constraints of mortality.
          </p>
          <Quote author='Unknown' text={'Death is not the end, but a gateway to new possibilities.'} />
          <h2 className='mt-2 text-2xl font-semibold tracking-tight text-left text-brand-primary dark:text-white lg:text-3xl lg:leading-snug'>Cryonics</h2>
          <p>
            Cryonics, the practice of preserving bodies or brains in a frozen state, is another element explored in the episode. "San Junipero" prompts us to consider the ethical and philosophical implications of extending life through technological means. It challenges us to contemplate the fine line between preserving life and potentially losing touch with the true essence of our humanity.
          </p>
          <div className="w-full mb-8">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/cryonics.jpg"
                fill
                alt="Image"
                className="object-cover rounded-md"
              />
            </AspectRatio>
          </div>
          <p>
            As the episode delves into the afterlife, it prompts us to question our beliefs and perceptions of what awaits us beyond death. It explores the intersection of science, spirituality, and the human desire for immortality. Through its narrative, "San Junipero" invites us to contemplate our own mortality and reflect on the meaning of life and the potential ramifications of transcending into a digital afterlife.
          </p>
          <AspectRatio ratio={16 / 9}>
            <Iframe url="https://www.youtube.com/embed/mjQwedC1WzI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='object-cover w-full h-full rounded-md' ></Iframe>
          </AspectRatio>
          <p>
            In conclusion, "San Junipero" is a captivating exploration of social issues, technology, and the human condition. It encourages us to contemplate the boundaries of love, the ethics of life extension, the implications of digital consciousness, and the mysteries that lie beyond our earthly existence. Join us as we embark on a journey into the complex and thought-provoking world of "San Junipero."
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

            <Link href='marxist'><ChevronLeft className='w-5 h-5' />Marxist</Link>
          </Button>
          <Button asChild variant='link'>
            <Link href='handmaids-tale'>Handmaid's Tale <ChevronRight className='w-5 h-5' /></Link>

          </Button>
        </div>
      </div>
    </Container>
  )
}

export default SanJunipero

