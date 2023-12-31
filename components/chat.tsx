'use client'

import { useCompletion } from 'ai/react'
import { Loader2 } from 'lucide-react'
import { Button } from './ui/button'

export default function Chat({ defaultInput }: { defaultInput: string }) {
  const {
    completion,
    isLoading,
    handleSubmit,
  } = useCompletion({
    initialInput: defaultInput,
    api: '/api/chat',
  })

  return (
    <div className="flex flex-col w-full max-w-md mx-auto stretch">
      <form onSubmit={handleSubmit} className='space-y-4'>
        <h1 className='text-lg font-medium'>What does Donald Trump Think?</h1>
        <p><strong>Trump Says:</strong> {completion}</p>
        <Button disabled={isLoading} type="submit">
          {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          ASK
        </Button>
      </form>
    </div>
  )
}