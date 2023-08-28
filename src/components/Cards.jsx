import React from "react";

function Cards() {
  const fields = [
    {
      title: "Web Development",
      content: `ChatGPT Web development is the intricate art of creating and
            maintaining websites on the internet. It encompasses a diverse
            range of disciplines, including front-end development, back-end
            development, and full-stack development. Front-end developers are
            responsible for crafting the visual and interactive elements that
            users directly interact with, using languages like HTML, CSS, and
            JavaScript. On the other hand, back-end developers focus on
            building the behind-the-scenes functionality that powers websites,
            involving server-side scripting, database management, and handling
            server requests. Full-stack developers possess expertise in both
            front-end and back-end technologies, enabling them to develop
            entire web applications independently. The dynamic nature of web
            development means professionals in this field need to stay abreast
            of the latest trends, tools, and frameworks to create seamless,
            responsive, and user-friendly online experiences. From personal
            blogs to complex e-commerce platforms, web development plays a
            pivotal role in shaping the digital landscape we engage with
            daily.Their expertise spans from crafting elegant user interfaces to designing robust databases, and from optimizing server performance to debugging intricate client-side interactions. It's a comprehensive skill set that allows them to bring projects to life from concept to deployment.`,
      username: "Jiya Rathore",
      img: "https://www.cdmi.in/courses@2x/web-developments.webp",
    },
    {
      title: "App Development",
      content: `App development is the process of creating software applications specifically designed to run on mobile devices, tablets, and other handheld devices. It involves a combination of design, coding, testing, and optimization to create user-friendly and functional applications. Mobile app developers use programming languages like Java, Swift, Kotlin, or React Native to build native or cross-platform apps that cater to various platforms. These apps can range from productivity tools to entertainment platforms, enhancing the way users interact with their devices. With the increasing demand for mobile solutions, app developers play a crucial role in shaping the way we use technology on a day-to-day basis.In today's digital age, mobile applications have become an integral part of our lives. From ordering food and managing finances to connecting with friends and monitoring health, apps have revolutionized the way we interact with technology. App development, the process of creating software applications for mobile devices, has emerged as a dynamic and ever-evolving field that combines creativity, innovation, and technical prowess.App development, the process of creating software applications for mobile devices, has emerged as a dynamic and ever-evolving field that combines creativity, innovation, and technical prowess`,
      username: "Pranjal Dubey",
      img: "https://www.ssl2buy.com/wp-content/uploads/2022/04/mobile-application-security.jpg",
    },
    {
      title: "Cloud Computing",
      content: `Cloud computing has revolutionized the way businesses and individuals manage and access data and applications. It involves using remote servers hosted on the internet to store, manage, and process data, as well as run applications. Cloud services offer scalability, flexibility, and cost-efficiency, making them essential for businesses of all sizes. Cloud engineers work on setting up and managing cloud infrastructure, deploying applications, ensuring security, and optimizing performance. From public clouds like AWS, Azure, and Google Cloud to private and hybrid cloud solutions, cloud computing is a fundamental technology that underpins modern digital operations.In recent years, the concept of cloud computing has transformed the way businesses, organizations, and individuals approach computing and data management. The cloud has ushered in a new era of scalability, flexibility, and efficiency, enabling seamless access to resources, applications, and services over the internet. This revolutionary paradigm shift has not only changed the IT landscape but has also become a catalyst for innovation across various industries.While cloud computing offers numerous advantages, it also raises security concerns, particularly related to data protection and privacy. Cloud providers implement a range of security measures, including encryption, access controls, and compliance certifications. However, it's crucial for organizations to implement their own security strategies, such as identity and access management, to ensure data remains secure.

        `,
      username: "Nishant Singh",
      img: "https://imageio.forbes.com/specials-images/imageserve/642bc7aea9b99c12f3deb166/0x0.jpg?format=jpg&width=1200",
    },
    {
      title: "Data Science",
      content: `Data science involves extracting valuable insights and knowledge from complex and often large datasets. Data scientists use a combination of statistical analysis, machine learning, and domain expertise to identify patterns, make predictions, and inform decision-making. They work with programming languages like Python or R to clean, preprocess, and analyze data, and use tools like Jupyter and TensorFlow for machine learning tasks. Data science plays a crucial role in various fields, including business, healthcare, finance, and more, enabling organizations to make data-driven decisions and gain a competitive edge.In the age of digital transformation, data has emerged as a driving force behind innovation, decision-making, and problem-solving. Data science, an interdisciplinary field that combines expertise in mathematics, statistics, computer science, and domain knowledge, enables us to extract meaningful insights from vast amounts of data. From enhancing business strategies to advancing scientific research, data science is revolutionizing the way we understand and interact with the world around us.Data science is a transformative field that empowers us to extract actionable insights from data, driving innovation and informed decision-making across industries. As technology advances and more data becomes available, data scientists will continue to play a pivotal role in shaping the way we understand and interact with the world, enabling us to unlock the hidden potential within data.`,
      username: "Arya Sharma",
      img: "https://www.datasciencecentral.com/wp-content/uploads/2023/06/AdobeStock_552748421-scaled.jpeg",
    },
    {
      title: "Artificial Intelligence/Machine Learning",
      content: `Artificial Intelligence (AI) and Machine Learning (ML) are technologies that enable computers to mimic human intelligence and learn from data. AI focuses on creating systems that can perform tasks that typically require human intelligence, like natural language understanding and image recognition. ML, a subset of AI, involves training algorithms to learn from data and make predictions or decisions. AI/ML engineers work on developing algorithms, training models, and improving their performance over time. These technologies have applications in virtual assistants, autonomous vehicles, recommendation systems, and more, transforming industries and enhancing user experiencesArtificial Intelligence (AI) and Machine Learning (ML) are two transformative technologies that have revolutionized the way we approach problem-solving, decision-making, and automation. They are driving innovations across industries, enabling computers to learn, adapt, and perform tasks that traditionally required human intelligence. The synergy between AI and ML is reshaping the technological landscape and shaping the future of various domains.AI and ML are transformative technologies that are reshaping industries and driving innovation across the globe. Their ability to analyze data, make predictions, and learn from experiences is pushing the boundaries of what technology can achieve. As AI and ML continue to evolve, they will play an increasingly significant role in shaping the future of how we interact with technology, automate processes, and improve various aspects of our lives..`,
      username: "Sambhav Dixit",
      img: "https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601_original.jpg",
    },
    {
      title: "Web 3.0",
      content: `Web 3.0, often referred to as the "decentralized web," envisions a new era of the internet where data is not controlled by centralized entities but rather shared and owned by individuals. This concept combines blockchain technology, decentralized networks, and enhanced user experiences. Web 3.0 developers work on creating decentralized applications (DApps) that operate on blockchain platforms like Ethereum. These applications range from decentralized finance (DeFi) platforms to non-fungible token (NFT) marketplaces. Web 3.0 represents a shift towards a more open, secure, and user-centric internet that empowers individuals to have greater control over their online interactions.The term "Web 3.0" refers to the vision of the next phase in the evolution of the internet. It envisions a more decentralized, open, and user-centric web that goes beyond the current web (Web 2.0) by incorporating blockchain technology, decentralized applications (dApps), and new protocols to reshape how we interact with digital content and services. Web 3.0 aims to address some of the limitations and challenges of the current internet model while emphasizing user control, data privacy, and interoperability.Web 3.0 represents an exciting vision for the future of the internet, where users have more control over their digital experiences, data privacy is enhanced, and decentralized technologies enable new possibilities for innovation. As the ecosystem continues to develop, Web 3.0 has the potential to transform industries, reshape online interactions, and empower users to take ownership of their digital presence.`,
      username: "Aryan Agarwal",
      img: "https://www.verdict.co.uk/wp-content/uploads/2022/12/Shutterstock_2183804245.jpg",
    },
  ];
  return (
    <div className="bg-white p-8 mt-[1rem]">
      {fields.map((field) => (
        <div className="bg-white rounded-lg overflow-hidden mb-4">
          <div className="flex flex-col xl:flex-row mb-5 shadow-2xl">
            <img
              src={field.img}
              alt="Blog"
              className="w-full xl:w-1/3 h-auto object-cover"
            />
            <div className="p-4 w-full lg:w-2/3">
              <h3 className="text-2xl md:text-2xl text-center font-semibold mb-2">
                {field.title}
              </h3>
              <p className="text-gray-600 lg:text-lg mb-2">{field.content}</p>
              <p className="text-gray-400 text-md md:text-lg text-end md:text-end">
                Created by: {field.username}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Add more cards as needed */}
    </div>
  );
}

export default Cards;
