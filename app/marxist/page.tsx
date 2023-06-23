
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

const Marxist = async () => {
  const polls = await fetch(`${ process.env.SITE_URL }/api/poll?page=marxist`, {
    cache: 'no-store'
  }).then(res => res.json()).catch(err => console.log(err))

  return (
    <Container>
      <div className="max-w-screen-md mx-auto">
        <h1 className="mt-2 mb-12 text-3xl font-semibold tracking-tight text-center text-brand-primary dark:text-white lg:text-4xl lg:leading-snug">
          Marxist Analysis: Unveiling Class Struggle and Economic Systems in Literature
        </h1>
        <div className="w-full my-12">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/karl-marx.png"
              fill
              alt="Image"
              className="object-cover rounded-md"
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col gap-8 mx-auto my-3 prose dark:prose-invert">
          <p>
            Welcome to the Marxist analysis section, where we will explore how literature reflects the conflicts and power dynamics between social classes and delves into the economic systems that shape society. By examining <strong> "The Tempest,"</strong> <strong>"Young Goodman Brown,"</strong> and <strong>"The Modest Proposal"</strong> through a Marxist lens, we will uncover profound insights into class struggle, ideology, power dynamics, and the potential for social change.
          </p>
          <h2 className='mt-8 text-2xl font-semibold tracking-tight text-left text-brand-primary dark:text-white lg:text-3xl lg:leading-snug'>The Tempest</h2>
          <p>
            <strong>"The Tempest"</strong> by William Shakespeare transports us to an island where the ruling class, represented by Prospero, wields power over the working class, including the character Caliban. Through this play, we witness the class struggle between Prospero's control and Caliban's desire for liberation.
          </p>
          <div className="w-full mb-12">
            <AspectRatio ratio={16 / 9}>
              <Iframe url="https://www.youtube.com/embed/wTNYYV54wts" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='object-cover w-full h-full rounded-md' allowFullScreen></Iframe>
            </AspectRatio>
          </div>
          <h2 className='gap-0 text-2xl font-semibold tracking-tight text-left text-brand-primary dark:text-white lg:text-3xl lg:leading-snug'>Young Goodman Brown</h2>
          <p>
            In Nathaniel Hawthorne's <strong>"Young Goodman Brown,"</strong> we encounter the protagonist's journey into the forest, which symbolizes the exploration of hidden truths and societal ideologies. The story unveils how dominant ideologies, rooted in Puritanism, shape the characters and perpetuate the power dynamics between the ruling class and the common people.
          </p>
          <div className="w-full mb-8">
            <AspectRatio ratio={16 / 6}>
              <Image
                src="/english-summative-ygb.png"
                fill
                alt="Image"
                className="object-cover rounded-md"
              />
            </AspectRatio>
          </div>
          <h2 className='mt-2 text-2xl font-semibold tracking-tight text-left text-brand-primary dark:text-white lg:text-3xl lg:leading-snug'>The Modest Proposal</h2>
          <p>
            Jonathan Swift's satirical masterpiece, <strong>"The Modest Proposal,"</strong> starkly exposes the economic systems and commodification of human life. Swift challenges the prevailing ideology of his time by suggesting a shocking solution to poverty and hunger, forcing readers to confront the devaluation of human life in the face of profit-driven capitalism.
          </p>
          <Quote author='Jonathan Swift' text={'I have been assured by a very knowing American of my acquaintance in London, that a young healthy child well nursed is at a year old a most delicious'} />
          <p>
            Through these literary works, we witness the effects of capitalism, the struggle between social classes, and the perpetuation of false consciousness.
            The ruling class employs these tools to maintain their control over the working class, leading to alienation and the devaluation of labor and relationships.
          </p>
          <div className="w-full mb-8">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/a-c-leo.png"
                fill
                alt="Image"
                className="object-cover rounded-md"
              />
            </AspectRatio>
          </div>
          <p>
            However, amidst the oppression, there is hope for change. Literature inspires us to question the existing systems, challenge dominant ideologies, and envision possibilities for social transformation.
          </p>
          <Quote text='Workers of the world, unite! You have nothing to lose but your chains.' author='Karl Marx' />
          <p>
            As we delve deeper into each story, let us critically analyze the class struggle, economic systems, ideology, power dynamics, alienation, and the potential for revolution and change. Together, we will gain a profound understanding of how literature reflects and critiques the society in which it is written.
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
            <Link href=''><ChevronLeft className='w-5 h-5' />Home Page</Link>
          </Button>
          <Button asChild variant='link'>
            <Link href='san-junipero'>San Junipero <ChevronRight className='w-5 h-5' /></Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Marxist