import React from 'react'
import { Separator } from './ui/separator'
import { Slider } from './ui/slider'

type Props = {}

const Instructions = (props: Props) => {
    return (
        <div className="text-muted-foreground text-sm flex flex-col text-justify">
            {/* <div className="grid grid-cols-2 gap-2"> */}
            <div>
                <strong className='text-[#00B612] mb-2 block'>Inference Steps</strong>
                <p>Adjust the number of inference steps to control the quality and detail of the generated image.</p>
                <p>Higher steps can lead to more refined and detailed results, but may increase generation time.</p>
            </div>
            <Separator className='my-4' />
            <div>
                <strong className='text-[#00B612] mb-2 block'>Guidance Scale</strong>
                <p>Control the influence of the text prompt on the generated image by adjusting the guidance scale.</p>
                <p>Higher values increase adherence to the prompt but may reduce diversity and creativity.</p>
            </div>
            <Separator className='my-4' />
            <div>
                {/* <strong>Using Parentheses for Emphasis</strong> */}
                <p>Place important keywords or phrases in parentheses to emphasize them.</p>
                <p><strong>Example:</strong> "A <em className='text-[#00B612]'>(beautiful)</em> landscape with <em className='text-[#00B612]'>(majestic)</em> mountains"</p>
            </div>

            <Separator className='my-4' />
            <div>
                {/* <strong>Assigning Weights to Words</strong> */}
                <p>
                    Use colons to assign weights (0.1 to 2.0) to words or phrases, indicating their importance.</p>
                <p><strong>Syntax:</strong> word:weight</p>
                <p><strong>Example:</strong> "A city skyline at sunset with tall <span className='text-[#00B612]'>buildings:1.5</span> and bright <span className='text-[#00B612]'>lights:0.5</span>"</p>
            </div>
            <Separator className='my-4' />
            <div>
                {/* <strong>Combining Parentheses and Weights</strong> */}
                <p>Enhance the influence of specific words by combining parentheses and weights.</p>
                <p><strong>Example:</strong> "A <em className='text-[#00B612]'>(breathtaking:1.5)</em> landscape with <em className='text-[#00B612]'>(rolling hills:1.2)</em> and <em className='text-[#00B612]'>(lush:0.8)</em> greenery"</p>
            </div>
            <Separator className='my-4' />
            <div>
                {/* <strong>Use of Negative Prompts</strong> */}
                <p>Use parentheses with negative weights to de-emphasize or exclude elements.</p>
                <p><strong>Syntax:</strong> <em>(word):-weight</em></p>
                <p><strong>Example:</strong> "A forest with tall trees and a river <em className='text-[#FF0F0F]'>(buildings):-1.0</em>"</p>
            </div>
            <Separator className='my-4' />
            <div>
                {/* <strong>Basic Prompt Structure</strong> */}
                <p>Keep prompts clear and concise. Describe the main subject first, followed by details.</p>
                <p><strong>Example:</strong> "A futuristic city skyline at sunset"</p>
            </div>
        </div>
    )
}

export default Instructions