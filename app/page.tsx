import Layout from "@/components/layout/Layout"
import Blog2 from "@/components/sections/Blog2"
import Brands1 from "@/components/sections/Brands1"
import Contact2 from "@/components/sections/Contact2"
import Home2 from "@/components/sections/Home2"
import Projects2 from "@/components/sections/Projects2"
import Service2 from "@/components/sections/Service2"
import Skills2 from "@/components/sections/Skills2"
import Static2 from "@/components/sections/Static2"
import Resume1 from "@/components/sections/Resume1"
import Testimonials1 from "@/components/sections/Testimonials1"

export default function Home() {

	return (
		<>
			<Layout headerStyle={2} footerStyle={2}>
				<Home2 />
				<Static2 />
				<Service2 />
				<Projects2 />
				<Resume1 />
				<Skills2 />
				<Brands1 />
				{/* <Testimonials1 /> */}
				<Blog2 />
				<Contact2 />
			</Layout>
		</>
	)
}