import * as React from "react";
import { cn } from "@/lib/utils"
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel"
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import { Button } from "./button";


interface newsDataProps {
  title: string,
  description: string,
  externalLink: string,
  thumbnail: string,
}
interface NewsAndUpdateCarouselProps extends React.ComponentProps<"div"> {
  newsData: newsDataProps[],
}

const dummyData = [
  {
    title: 'Real Stake 1',
    description: 'Say hello to a world of limitless possibilities with our innovative staking program! Experience the freedom of maximizing your earnings while maintaining full control.',
    externalLink: 'https://www.medium.com',
    thumbnail: 'https://fastly.picsum.photos/id/1072/200/200.jpg?hmac=jar1_w-0fdzV_d70mmk9VzkBQA9B_oSZuZs21we31ZE',
  },
  {
    title: 'Real Stake 2',
    description: 'Say hello to a world of limitless possibilities with our innovative staking program! Experience the freedom of maximizing your earnings while maintaining full control.',
    externalLink: 'https://www.medium.com',
    thumbnail: 'https://fastly.picsum.photos/id/1072/200/200.jpg?hmac=jar1_w-0fdzV_d70mmk9VzkBQA9B_oSZuZs21we31ZE',
  },
  {
    title: 'Real Stake 3',
    description: 'Say hello to a world of limitless possibilities with our innovative staking program! Experience the freedom of maximizing your earnings while maintaining full control.',
    externalLink: 'https://www.medium.com',
    thumbnail: 'https://fastly.picsum.photos/id/1072/200/200.jpg?hmac=jar1_w-0fdzV_d70mmk9VzkBQA9B_oSZuZs21we31ZE',
  }
]

const NewsAndUpdateCarousel = React.forwardRef<HTMLDivElement, NewsAndUpdateCarouselProps>(
  ({ className, newsData,  ...props }, ref) => {

    const shortDescription = (description: string) => {
      return description.length > 120 ? description.slice(0, 120) + '...' : description;
    }

    return (
      <div
        ref={ref}
        {...props}
        className={cn("bg-weaker rounded-lg border border-default md:w-[680px] w-full min-w-[320px] flex flex-col md:p-6x p-4x", className)}
      >
        <div className="flex items-center justify-between">
          <div className="md:text-body-2xl-strong text-body-xl-strong text-foreground-weak">News & updates</div>

          <div className="flex items-center gap-3x">
            <button
              className="flex items-center justify-center h-8x w-8x rounded-full hover:bg-gradinet-surface-linear backdrop-blur-md"
            >
              <LucideChevronLeft className="h-4x w-4x" />
            </button>

            <button
              className="flex items-center justify-center h-8x w-8x rounded-full hover:bg-gradinet-surface-linear backdrop-blur-md"
            >
              <LucideChevronRight className="h-4x w-4x" />
            </button>
          </div>
        </div>

        <Carousel>
          <CarouselContent>
            {
              newsData.map((item, ind) => (
                <CarouselItem key={item.title + ind}>
                  <div className="rounded-lg bg-weakest p-6x flex flex-col md:flex-row gap-6x mt-4x">
                    <div className="md:w-[180px] h-[180px] w-full rounded-xl box-border overflow-hidden shrink-0 bg-weak">
                      <Image 
                        src={item.thumbnail ? item.thumbnail : 'news-dummy-img.png'}
                        alt=""
                        width="100"
                        height="100"
                        className="md:w-[180px] h-[180px] w-full object-contain md:object-cover"
                      />
                    </div>

                    <div>
                      <div className="md:text-body-l-strong text-foreground-default text-body-m-strong">{item.title}</div>
                      <div className="md:text-body-m text-body-s text-foreground-weakest mt-2x mb-6x">{shortDescription(item.description)}</div>
                      <Button
                        variant="outline"
                        size="l"
                        onClick={() => window.open("_blank", item.externalLink)}
                      >
                        Learn more
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>

      </div>
    )
  }
)
NewsAndUpdateCarousel.displayName = "NewsAndUpdateCarousel"

export { NewsAndUpdateCarousel };
