import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontEndSkills = ["React", "Vue", "JavaScript", "TypeScript", "HTML5", "CSS"]
    const backEndSkills = ["Laravel", "PHP", "MySQL"]
    const cyberSecuritySkills = ["Linux", "OWASP", "Ethical Hacking"]
    return (
        <section
            id="about"
            className="min-h-screen flex item-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>
                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Junior Front-End Developer with experience in React, JavaScript, HTML, and CSS,
                            complemented by knowledge of Back-End development with Laravel.
                            <br /><br />
                            Passionate about cybersecurity and secure software development,
                            I specialize in performance optimization and scalable architecture.
                            I constantly explore innovative solutions in technology and digital business,
                            with the goal of specializing in Ethical Hacking and Application Security.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-2 gap-y-1">
                            <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">FrontEnd</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontEndSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">BackEnd</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backEndSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Cybersecurity</h3>
                                <div className="flex flex-wrap gap-2">
                                    {cyberSecuritySkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 md-grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-traslate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🧑🏻‍🎓 Education </h3>
                            <ul className="list-inside text-gray-300 spacy-y-2 mx-8">
                                <li>
                                    <strong>Systems Engineering</strong>
                                    <br />UNIVERSIDAD ANDINA DEL CUSCO
                                    <br />(2024)
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-traslate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                            <div className="space-y-4 text-gray-300 text-bold mx-8">
                                <div className="my-6">

                                    <div className="flex justify-between font-bold">
                                        <h4>GREEN POINT | TIERRA FERTIL | MYCELIUM | JACOBS BREWERY</h4>
                                        <span>Cusco - Perú</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <h4>Head of the IT Department</h4>
                                        <span>May 2024 - Present</span>
                                    </div>
                                    <ul className="text-gray-400 my-1 list-disc mx-5">
                                        <li>Led a team in managing technological projects, optimizing delivery times.</li>
                                        <li>Implemented cybersecurity strategies, reducing security incidents by 40% through access controls and network monitoring.</li>
                                        <li>Managed over 50 hardware and software devices, ensuring 99.9% system uptime.</li>
                                        <li>Developed and implemented IT security policies, achieving regulatory compliance and reducing vulnerabilities by 50%.</li>
                                        <li>Coordinated preventive and corrective maintenance, minimizing failures in critical equipment.</li>
                                        <li>Trained over 20 employees in best cybersecurity practices, reducing operational errors.</li>
                                        <li>Integrated new technologies and digital solutions, improving efficiency in internal processes.</li>
                                    </ul>
                                </div>


                                <div>
                                    <div className="flex justify-between font-bold">
                                        <h4>UNIVERSIDAD CONTINENTAL DEL CUSCO</h4>
                                        <span>Cusco - Perú</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <h4>Academic Records Assistant</h4>
                                        <span>Sep 2023 – Feb 2024</span>
                                    </div>
                                    <ul className="text-gray-400 my-1 list-disc mx-5">
                                        <li>Developed a web platform to optimize preventive maintenance management, reducing process times.</li>
                                        <li>Collaborated in the creation and maintenance of institutional websites, improving accessibility and user experience.</li>
                                        <li>Managed and configured local servers.</li>
                                        <li>Designed and implemented internal networks, enhancing connectivity and security for the municipality’s systems.</li>
                                        <li>Automated registration and maintenance control processes, reducing error margins by 30%.</li>
                                    </ul>
                                </div>


                                <div>
                                    <div className="flex justify-between font-bold">
                                        <h4>MUNICIPALIDAD PROVINCIAL DEL CUSCO</h4>
                                        <span>Cusco - Perú</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <h4>Pre Professional Internship</h4>
                                        <span>Jan 2023 – May 2023</span>
                                    </div>
                                    <ul className="text-gray-400 my-1 list-disc mx-5">
                                        <li>Provided support to over 300 student in enrollment, and academic.</li>
                                        <li>Supervised and digitized more than 5000 physical documents, ensuring a 98% accuracy rate in stored data</li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex justify-between font-bold">
                                        <h4>EL PORVENIR</h4>
                                        <span>Cusco - Perú</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <h4>Docente de operador de Computadoras</h4>
                                        <span>Oct 2022 – Dic 2022</span>
                                    </div>
                                    <ul className="text-gray-400 my-1 list-disc mx-5">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
