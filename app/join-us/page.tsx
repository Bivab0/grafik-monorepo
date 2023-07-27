import Image from "next/image";
export default function JoinUS() {
  return (
    <>
      <div className="">
        <div>
          <Image
            src="/career.jpg"
            width={1280}
            height={1800}
            alt="career"
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-20">
        <div className=" uppercase font-roboto font-semibold text-xs">
          Join US
        </div>
        <div className="border w-4 border-black m-1"></div>
        <div className="uppercase font-semibold text-3xl">
          Why Join <span className="text-blue-500">US</span>
        </div>
        <div className="w-1/3 m-5 text-center font-roboto text-gray-500">
          Join us and unleash your creativity, as we paint dreams into reality
          through the captivating art of animation. At Grafiq, we believe in
          fostering a collaborative and inspiring environment where your
          imagination can soar and talents can thrive. Together, let&apos;s
          create animated wonders that leave a lasting impact on audiences
          worldwide.
        </div>
        <div className="mt-5 font-roboto font-semibold">
          Be part of the creativity team
        </div>
        <div className="border w-12 border-black m-1"></div>
      </div>
      <div className="grid grid-cols-8 w-full mt-10 gap-10">
        <div className="col-span-1"></div>
        <div className="flex items-center flex-col col-span-2 w-full">
          <div className="rounded-full bg-green-700 w-52 h-52 overflow-hidden">
            <Image src="/avatar.jpg" alt="avatar" height={600} width={600} />
          </div>
          <div className="font-semibold text-base mb-2 mt-4">
            Animation Artist
          </div>
          <div className="w-1/2 text-center text-sm text-gray-600 m-2">
            Bring characters and worlds to life through your artistic
            brilliance. Utilize your creativity and technical skills to create
            captivating animations that enchant and inspire audiences worldwide.
          </div>
          <div className="m-4 text-blue-600 font-semibold">Apply Now</div>
        </div>
        <div className="flex items-center flex-col  col-span-2">
          <div className="rounded-full bg-green-700 w-52 h-52 overflow-hidden">
            <Image src="/avatar.jpg" alt="avatar" height={600} width={600} />
          </div>
          <div className="font-semibold text-base mb-2 mt-4">Storyboarder</div>
          <div className="w-1/2 text-center text-sm text-gray-600 m-2">
            Visualize and craft compelling storyboards, laying the foundation
            for unforgettable animated narratives. Translate scripts and
            concepts into dynamic visual sequences that drive the
            animation&apos;s storytelling.
          </div>
          <div className="m-4 text-blue-600 font-semibold">Apply Now</div>
        </div>
        <div className="flex items-center flex-col  col-span-2">
          <div className="rounded-full bg-green-700 w-52 h-52 overflow-hidden">
            <Image src="/avatar.jpg" alt="avatar" height={600} width={600} />
          </div>
          <div className="font-semibold text-base mb-2 mt-4">3D Modeler</div>
          <div className="w-1/2 text-center text-sm text-gray-600 m-2">
            Sculpt intricate 3D models that breathe life into characters, props,
            and environments, elevating the animation&apos;s visual appeal.
            Collaborate with the team to ensure seamless integration of models
            into the animation pipeline.
          </div>
          <div className="m-4 text-blue-600 font-semibold">Apply Now</div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
        <div className="flex items-center flex-col col-span-2 w-full">
          <div className="rounded-full bg-green-700 w-52 h-52 overflow-hidden">
            <Image src="/avatar.jpg" alt="avatar" height={600} width={600} />
          </div>
          <div className="font-semibold text-base mb-2 mt-4">
            VFX Specialist
          </div>
          <div className="w-1/2 text-center text-sm text-gray-600 m-2">
            Master the art of visual effects, adding magic and realism to
            animations with stunning visual elements. Create awe-inspiring
            visual effects that enhance the overall cinematic experience.
          </div>
          <div className="m-4 text-blue-600 font-semibold">Apply Now</div>
        </div>
        <div className="flex items-center flex-col  col-span-2">
          <div className="rounded-full bg-green-700 w-52 h-52 overflow-hidden">
            <Image src="/avatar.jpg" alt="avatar" height={600} width={600} />
          </div>
          <div className="font-semibold text-base mb-2 mt-4">
            Animation Producer
          </div>
          <div className="w-1/2 text-center text-sm text-gray-600 m-2">
            Oversee and manage animation projects from concept to completion,
            ensuring smooth workflows and exceptional quality. Coordinate with
            artists, animators, and stakeholders to deliver projects on time and
            within budget.
          </div>
          <div className="m-4 text-blue-600 font-semibold">Apply Now</div>
        </div>
        <div className="flex items-center flex-col  col-span-2">
          <div className="rounded-full bg-green-700 w-52 h-52 overflow-hidden">
            <Image src="/avatar.jpg" alt="avatar" height={600} width={600} />
          </div>
          <div className="font-semibold text-base mb-2 mt-4">
            Sound Designer
          </div>
          <div className="w-1/2 text-center text-sm text-gray-600 m-2">
            Create immersive soundscapes that complement animations, enhancing
            the storytelling experience and engaging viewers&apos; emotions.
            Craft sound effects, music, and voiceovers to elevate the
            animation&apos;s impact and emotional resonance.
          </div>
          <div className="m-4 text-blue-600 font-semibold">Apply Now</div>
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="bg-gray-100 flex flex-col items-center mt-20 pt-20">
        <div className=" uppercase font-roboto font-semibold text-xs">
          Talent of the month
        </div>
        <div className="border w-4 border-black m-1"></div>
        <div className="uppercase font-semibold text-3xl">
          Grafiq creator <span className="text-blue-500">Talent</span>
        </div>
        <div className="rounded-full bg-green-700 w-32 h-32 overflow-hidden mt-10">
          <Image src="/avatar.jpg" alt="avatar" height={600} width={600} />
        </div>
        <div>
          <span className="font-semibold">John Doe - </span>
          <span className="text-yellow-500">Design Speciaalist</span>
        </div>
        <div className="w-1/3 m-5 text-center font-roboto text-gray-500">
          &quot;Every day at this animation wonderland feels like stepping into
          a kaleidoscope of creativity and innovation! 🌈🚀 From sketch to
          screen, we weave dreams into reality, and I couldn&apos;t be more
          thrilled to be part of this magical journey.&quot;
          <br />
          <span className="text-blue-400">
            #DreamJob #AnimationMagic #PassionUnleashed
          </span>
        </div>
        <div className="mt-20 flex flex-col items-center">
          <div className=" uppercase font-roboto font-semibold text-xs m-2">
            nterested!!!
          </div>
          <div className="uppercase font-semibold text-3xl">
            Ready to <span className="text-blue-500">Join?</span>
          </div>
          <div className="my-6 text-sm text-gray-500 text-center">
            We are a team of technical visionaries looking for experienced
            talent like you to join us
          </div>
          <div className="flex border border-black items-center mb-20 rounded-full bg-gray-200 ">
            <div className="py-2 px-4">
              <input
                type="email"
                name="email"
                id="email"
                className="focus:outline-none focus:ring-0 text-base bg-gray-200"
                placeholder="Enter your email"
              />
            </div>
            <div className="bg-black py-3 px-6 rounded-full text-white uppercase text-sm">
              Join Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
