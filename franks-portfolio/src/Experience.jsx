function Experience() {
  return (
      <section id="experience" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Experience</h2>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">

            {/* MecklenBurg County */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900">IT Intern</h3>
              <p className="text-lg text-gray-700">Mecklenburg County Government</p>
              <div className="flex justify-between text-gray-500">
                <span>Charlotte, NC</span>
                <span>June 2023 – Aug 2023</span>
              </div>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>Delivered technical support and resolved customer issues, ensuring a high standard of service</li>
                <li>Conducted in-depth analysis of technical problems, identified root causes, and implemented effective solutions</li>
                <li>Authored knowledge base articles to streamline processes and enhance the efficiency of the IT support team</li>
              </ul>
            </div>

            {/* Bofa */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900">Digital Ambassador Intern</h3>
              <p className="text-lg text-gray-700">Bank of America</p>
              <div className="flex justify-between text-gray-500">
                <span>Charlotte, NC</span>
                <span>June 2024 – Aug 2024</span>
              </div>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>Delivered technical support and resolved customer issues, ensuring a high standard of service</li>
                <li>Cultivated and maintained strong customer relationships through personalized service and effective communication</li>
                <li>Delivered technology support and guidance, troubleshooting issues and providing solutions to improve customer
                satisfaction and engagement</li>

              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Experience; 