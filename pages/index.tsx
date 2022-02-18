import {classNames} from '../utils/styles'
import Image from 'next/image'
import flash from '../public/flash-dynamic-gradient.png'
import Layout from '../components/layout'
import Link from 'next/link'

function HeroSection() {
  return (
    <div className="min-h-full lg:relative">
      <div className="lg:max-h-2xl relative mx-auto h-48 w-48 md:h-72 md:w-72 lg:absolute lg:inset-y-0 lg:right-0 lg:h-1/2 lg:w-1/2 lg:max-w-3xl lg:pt-2">
        <Image src={flash} layout="responsive" alt="Flash" />
      </div>
      <div className="lg:ext-left mx-auto w-full max-w-7xl pt-4 text-center lg:pb-20 lg:pt-24 ">
        <div className="px-4 sm:px-8 lg:w-2/3 xl:pr-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-left lg:text-6xl">
            <span className="text-black dark:text-white xl:inline">
              I help people build
            </span>
            <span className="block text-indigo-800 dark:text-indigo-200">
              quality software
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-900 dark:text-indigo-200 sm:max-w-3xl lg:mx-0 lg:w-4/5 lg:text-left">
            Hi, I'm Ovi Stoica! I help people and startups build quality
            software and I write about technology and startups
          </p>
          <div className="mt-10  sm:flex sm:max-w-none sm:justify-center lg:flex lg:justify-start">
            <div className="space-y-4 duration-200  sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 ">
              <a
                href={'https://calendly.com/ovidiu-stoica/chat'}
                className={classNames(
                  'flex items-center justify-center rounded-md border border-transparent',
                  'bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8',
                )}>
                Let's chat
              </a>
              <Link href="/blog">
                <a
                  className={classNames(
                    'flex items-center justify-center rounded-md px-4 py-3 text-base font-medium text-white transition-all sm:px-8',
                    'bg-gradient-to-r from-purple-500 to-indigo-600 hover:bg-gradient-to-l',
                  )}>
                  Read the Blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// function AlternatingFeatureSection() {
//   return (
//     <>
//       <div className="relative overflow-hidden pt-16 pb-32">
//         <div className="relative">
//           <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
//             <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
//               <div>
//                 <div>
//                   <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
//                     <InboxIcon
//                       className="h-6 w-6 text-white"
//                       aria-hidden="true"
//                     />
//                   </span>
//                 </div>
//                 <div className="mt-6">
//                   <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
//                     Stay on top of customer support
//                   </h2>
//                   <p className="mt-4 text-lg text-gray-500">
//                     Semper curabitur ullamcorper posuere nunc sed. Ornare
//                     iaculis bibendum malesuada faucibus lacinia porttitor.
//                     Pulvinar laoreet sagittis viverra duis. In venenatis sem
//                     arcu pretium pharetra at. Lectus viverra dui tellus ornare
//                     pharetra.
//                   </p>
//                   <div className="mt-6">
//                     <a
//                       href="#"
//                       className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">
//                       Get started
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-8 border-t border-gray-200 pt-6">
//                 <blockquote>
//                   <div>
//                     <p className="text-base text-gray-500">
//                       &ldquo;Cras velit quis eros eget rhoncus lacus ultrices
//                       sed diam. Sit orci risus aenean curabitur donec aliquet.
//                       Mi venenatis in euismod ut.&rdquo;
//                     </p>
//                   </div>
//                   <footer className="mt-3">
//                     <div className="flex items-center space-x-3">
//                       <div className="flex-shrink-0">
//                         <img
//                           className="h-6 w-6 rounded-full"
//                           src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
//                           alt=""
//                         />
//                       </div>
//                       <div className="text-base font-medium text-gray-700">
//                         Marcia Hill, Digital Marketing Manager
//                       </div>
//                     </div>
//                   </footer>
//                 </blockquote>
//               </div>
//             </div>
//             <div className="mt-12 sm:mt-16 lg:mt-0">
//               <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
//                 <img
//                   className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
//                   src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
//                   alt="Inbox user interface"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-24">
//           <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
//             <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
//               <div>
//                 <div>
//                   <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
//                     <SparklesIcon
//                       className="h-6 w-6 text-white"
//                       aria-hidden="true"
//                     />
//                   </span>
//                 </div>
//                 <div className="mt-6">
//                   <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
//                     Better understand your customers
//                   </h2>
//                   <p className="mt-4 text-lg text-gray-500">
//                     Semper curabitur ullamcorper posuere nunc sed. Ornare
//                     iaculis bibendum malesuada faucibus lacinia porttitor.
//                     Pulvinar laoreet sagittis viverra duis. In venenatis sem
//                     arcu pretium pharetra at. Lectus viverra dui tellus ornare
//                     pharetra.
//                   </p>
//                   <div className="mt-6">
//                     <a
//                       href="#"
//                       className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">
//                       Get started
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
//               <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
//                 <img
//                   className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
//                   src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
//                   alt="Customer profile user interface"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// function GradientFeatureSection() {
//   return (
//     <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
//       <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
//         <h2 className="text-3xl font-extrabold tracking-tight text-white">
//           Inbox support built for efficiency
//         </h2>
//         <p className="mt-4 max-w-3xl text-lg text-purple-200">
//           Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
//           magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.
//         </p>
//         <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
//           {features.map((feature) => (
//             <div key={feature.name}>
//               <div>
//                 <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
//                   <feature.icon
//                     className="h-6 w-6 text-white"
//                     aria-hidden="true"
//                   />
//                 </span>
//               </div>
//               <div className="mt-6">
//                 <h3 className="text-lg font-medium text-white">
//                   {feature.name}
//                 </h3>
//                 <p className="mt-2 text-base text-purple-200">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// function StatsSection() {
//   return (
//     <div className="relative bg-gray-900">
//       <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
//         <div className="h-full w-full xl:grid xl:grid-cols-2">
//           <div className="h-full xl:relative xl:col-start-2">
//             <img
//               className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
//               src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
//               alt="People working on laptops"
//             />
//             <div
//               aria-hidden="true"
//               className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
//         <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
//           <h2 className="text-sm font-semibold uppercase tracking-wide">
//             <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
//               Valuable Metrics
//             </span>
//           </h2>
//           <p className="mt-3 text-3xl font-extrabold text-white">
//             Get actionable data that will help grow your business
//           </p>
//           <p className="mt-5 text-lg text-gray-300">
//             Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
//             quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce
//             orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet
//             amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.
//           </p>
//           <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
//             {metrics.map((item) => (
//               <p key={item.id}>
//                 <span className="block text-2xl font-bold text-white">
//                   {item.stat}
//                 </span>
//                 <span className="mt-1 block text-base text-gray-300">
//                   <span className="font-medium text-white">
//                     {item.emphasis}
//                   </span>{' '}
//                   {item.rest}
//                 </span>
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

function CTASection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Get in touch or create an account.
          </span>
        </h2>
        <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">
            Learn more
          </a>
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm hover:bg-indigo-100">
            Get started
          </a>
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  )
}
