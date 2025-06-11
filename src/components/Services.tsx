return (
  <section id="services" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Tree Care Services</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive tree care solutions for residential and commercial properties
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-0 shadow-md">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                {service.description}
              </CardDescription>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div> {/* <-- Вот недостающий закрывающий тег */}

      <div className="mt-16 text-center">
        <a
          href="/FILE_5943.docx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border-2 border-green-600 px-8 py-3 text-lg font-medium text-green-600 transition-colors hover:bg-green-50"
        >
          View All Services
        </a>
      </div>
      
    </div> {/* Этот тег тоже был пропущен в вашем коде, он закрывает главный контейнер */}
  </section>
);
