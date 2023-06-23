'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const FormSchema = z.object({
  option: z.enum(['1', '2'], {
    required_error: "You need to select a an option.",
  }),
})

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Separator } from "./ui/separator"
import dynamic from "next/dynamic"
const Chat = dynamic(() => import('@/components/chat'))

interface Props {
  poll: {
    _id: string
    type: string
    question: string;
    option1Text: string
    option2Text: string
    option1Votes: number
    option2Votes: number
  }
}

export default function Poll({ poll }: Props) {
  const {
    question,
    option1Text,
    option2Text,
    option1Votes,
    option2Votes
  } = poll
  const [voted, setVoted] = useState(false)
  const [option, setOption] = useState<'1' | '2' | undefined>(undefined)
  const router = useRouter()
  const total = option1Votes + option2Votes

  useEffect(() => {
    // Perform localStorage action
    const optionValue = localStorage.getItem(poll?._id) as '1' | '2' | null
    const option = optionValue || undefined
    setVoted(option === '1' || option === '2')
    setOption(option)

    if (option) {
      form.setValue('option', option);
    }

    console.log(form.getValues())
  }, [])

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      option: option || undefined
    }
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data, 'data')
    try {
      await fetch(`/api/poll?id=${ poll?._id }&option=${ data.option }`, {
        method: 'POST'
      })

      setVoted(true)
      localStorage.setItem(`${ poll?._id }`, data.option);
      router.refresh()
    } catch (error) {
      console.log("🚀 ~ file: poll.tsx:39 ~ handleVote ~ error:", error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="leading-6 text-left max-w-prose">{question}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col w-full gap-4 mt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="option"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={(value: '1' | '2') => field.onChange(value)}
                    >
                      <div className="mb-2 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="space-x-2">
                            <RadioGroupItem value="1" id="r1" disabled={voted} />
                            <FormLabel htmlFor="r1">{option1Text}</FormLabel>
                          </div>
                          <p hidden={!voted}>
                            {total} {total === 1 ? 'Vote' : 'Votes'}
                          </p>
                        </div>
                        <Progress hidden={!voted} value={+((option1Votes / (total)) * 100).toFixed(1)} />
                      </div>
                      <div className="mb-2 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="space-x-2">
                            <RadioGroupItem value="2" id="r2" disabled={voted} />
                            <FormLabel htmlFor="r2">{option2Text}</FormLabel>
                          </div>
                          <p hidden={!voted}>
                            {total} {total === 1 ? 'Vote' : 'Votes'}
                          </p>
                        </div>
                        <Progress hidden={!voted} value={+((option2Votes / (total)) * 100).toFixed(1)} />
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>)} />
            <Button type="submit" disabled={voted}>Submit</Button>
          </form>
        </Form>

      </CardContent>
      <CardFooter className="flex flex-col items-start mt-4">
        <p className="font-medium">{total} {total === 1 ? 'Vote' : 'Votes'}</p>
        <Separator />
        <Chat defaultInput={poll?.question} />
      </CardFooter>
    </Card>

  )
}
