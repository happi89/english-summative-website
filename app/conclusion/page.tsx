
import Container from '@/components/container'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
const Quote = dynamic(() => import('@/components/quote'))
const Link = dynamic(() => import('next/link'))
const Poll = dynamic(() => import('@/components/poll'))

const Handmaid = async () => {
  const polls = await fetch(`${ process.env.SITE_URL }/api/poll?page=conclusion`, {
    cache: 'no-store'
  }).then(res => res.json()).catch(err => console.log(err))

  return (
    <Container>
      <div className="max-w-screen-md mx-auto">
        <h1 className="mt-2 mb-12 text-3xl font-semibold tracking-tight text-center text-brand-primary dark:text-white lg:text-4xl lg:leading-snug">
          Conclusion
        </h1>
        <div className="flex flex-col gap-8 mx-auto my-3 prose dark:prose-invert">
          <p>
            Welcome to the conclusion page of our interactive course on literature, media, and societal issues. Throughout this journey, we have explored a wide range of topics, mediums, and perspectives, delving into the intricate connections between them. As we wrap up this course, let's take a moment to recapitulate the key findings and insights we have gained and reflect on how these learnings have shaped our understanding.
          </p>
          <div className="w-full my-12">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/end.avif"
                fill
                alt="Image"
                className="object-cover rounded-md"
              />
            </AspectRatio>
          </div>
          <p>
            In our exploration of literature and media, we have witnessed the transformative power they possess. From classic novels to contemporary films, we have discovered how storytelling serves as a mirror to society, reflecting its triumphs, struggles, and complexities. We have seen how representation in literature and media plays a crucial role in shaping narratives and shaping our perceptions. By embracing diverse voices and narratives, we can foster empathy, challenge stereotypes, and create a more inclusive world.
          </p>
          <div className="w-full mb-8">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/reading.jpeg"
                fill
                alt="Image"
                className="object-cover rounded-md"
              />
            </AspectRatio>
          </div>
          <p>
            At the intersection of literature, media, and societal issues, we have unearthed thought-provoking insights. We have examined how social justice themes are interwoven in literature, shedding light on systemic inequalities, discrimination, and the pursuit of justice. Through critical analysis and discussion, we have learned to navigate complex narratives, recognizing the nuances and layers they hold. Our exploration has highlighted the significance of engaging with literature and media as active participants, questioning, and challenging prevailing norms.
          </p>
          <Quote author='Fernando Pessoa' text="Literature is the most agreeable way of ignoring life" />
          <p>
            Personal Reflection: As I look back on this course, I am amazed at the profound impact it has had on my understanding of literature, media, and societal issues. It has expanded my horizons, allowing me to view the world through multiple lenses and perspectives. I have developed a deeper appreciation for the power of storytelling and its ability to foster empathy and understanding. This course has not only enriched my intellectual growth but has also ignited a passion within me to actively contribute to positive change in society.
          </p>
          <div className="w-full mb-8">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/mediums.jpeg"
                fill
                alt="Image"
                className="object-cover rounded-md"
              />
            </AspectRatio>
          </div>
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
      <p className='my-10'>
        Thank you for visiting my website and engaging with my content. We appreciate your time and interest in exploring the topics we've covered. Before you leave, I invite you to take a moment to enjoy a fun game that I've prepared for you. <strong>GOOD BYE!</strong>
      </p>
      <div className="flex items-center justify-end w-full mt-8">
        <div className='flex gap-4'>
          <Button asChild variant='link'>
            <Link href='handmaids-tale'><ChevronLeft className='w-5 h-5' />Handmaid's Tale</Link>
          </Button>
        </div>
        <div>
          <Link className='text-xl font-bold text-blue-500 underline' href='https://happi89.github.io/mario/' target="_blank">Play my Marioish game here!</Link>
        </div>
      </div>
    </Container>
  )
}

export default Handmaid

