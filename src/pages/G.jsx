import React from 'react';

const services = {
  ivf: [
    {
      title: 'Family Balancing (Gender Selection)',
      href: 'https://fakihivf.com/family-balancing/',
      description:
        'Screen embryos to identify gender and check for chromosomal abnormalities such as Down syndrome.',
    },
    {
      title: 'Comprehensive Chromosomal Screening (CCS)',
      href: 'https://fakihivf.com/comprehensive-chromosomal-screening/',
      description:
        'Screen all 24 chromosomes for gender and chromosomal abnormalities including Trisomy 13, Trisomy 18, and Trisomy 21.',
    },
    {
      title: 'Pre-Implantation Genetic Diagnosis (PGD)',
      href: 'https://fakihivf.com/pre-implantation-genetic-diagnosis/',
      description:
        'Assess embryos for hereditary diseases and single-gene disorders to reduce the chance of passing on a known genetic condition.',
    },
    {
      title: 'HLA Matching',
      href: 'https://fakihivf.com/curing-a-family-member-with-hla-matching/',
      description:
        'Identify an HLA match during IVF to support treatment for a family member with a hereditary disease curable by bone marrow transplant.',
    },
  ],
  hereditary: [
    {
      title: 'Mutation Screening',
      href: 'https://fakihivf.com/mutation-screening/',
      description:
        'Recommended when a genetic disease has already been identified or there is a known family history for a particular condition.',
    },
    {
      title: 'Exome Screening',
      href: 'https://fakihivf.com/exome-screening/',
      description:
        'Uses next generation sequencing to screen important regions across tens of thousands of genes at the same time.',
    },
    {
      title: 'Premarital or Preconception Screening',
      href: 'https://fakihivf.com/premarital-or-preconception-screening/',
      description:
        'Helps couples understand whether their future children may be at risk of inheriting a genetic disease.',
    },
  ],
  pregnancy: [
    {
      title: 'Non-Invasive Prenatal Diagnosis (NIPD)',
      href: 'https://fakihivf.com/non-invasive-prenatal-testing/',
      description:
        'A non-invasive blood test performed from 10 weeks to screen for Trisomy 13, 18, and 21 and identify fetal gender.',
    },
    {
      title: 'Products of Conception (POC)',
      href: 'https://fakihivf.com/chromosomal-analysis-of-product-of-conception/',
      description:
        'Chromosomal analysis to help identify the cause of pregnancy loss and guide future pregnancy management.',
    },
  ],
};

const quickLinks = [
  { label: 'During IVF', href: '#ivf' },
  { label: 'Carrier Screening', href: '#carriers' },
  { label: 'During Pregnancy', href: '#pregnancy' },
  { label: 'Geneus® Risk Assessment', href: '#geneus' },
];

function LinkCard({ title, href, description }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-3xl border border-teal-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl"
    >
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 17 17 7" />
          <path d="M9 7h8v8" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teal-800">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </a>
  );
}

export default function GeneticTestingAtFakihIVF() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f5fbfb_0%,#ffffff_35%,#f8fafc_100%)] text-slate-800">
      <section className="relative overflow-hidden border-b border-teal-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(14,116,144,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 backdrop-blur">
                In-house Genetics Laboratory
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Genetic Testing At Fakih IVF
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Fakih IVF Fertility Center has a full-service in-house Genetics Laboratory in the UAE capable of performing genetic testing on embryos. As part of its mission to help deliver healthy babies, the laboratory uses up-to-date technologies and supports couples in Dubai, Abu Dhabi, Al Ain, across the UAE, and abroad.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Services include testing during IVF, screening to identify carriers of hereditary diseases, genetic testing during pregnancy, and genetic risk assessment through Geneus®.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {quickLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-2xl shadow-teal-100/40 backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h2 className="text-lg font-semibold text-slate-900">Available across</h2>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">UAE & abroad</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {['Dubai', 'Abu Dhabi', 'Al Ain Partners'].map((location) => (
                  <div key={location} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4">
                    <p className="text-sm font-medium text-slate-500">Location</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">{location}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-teal-200">Contact genetics team</p>
                <a href="mailto:genetics@fakihivf.com" className="mt-3 block text-lg font-semibold text-white hover:text-teal-200">
                  genetics@fakihivf.com
                </a>
                <a
                  href="https://fakihivf.com/book-an-appointment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-teal-50"
                >
                  Book an appointment
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="ivf" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">Genetic Testing And IVF</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Informed embryo selection before transfer
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              During an IVF-ICSI cycle, after egg retrieval and fertilization, a few cells are taken from the embryo and tested in the Genetics Laboratory. Embryo transfer takes place after the genetic results are released, and completing genetic testing does not alter the duration of treatment.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.ivf.map((service) => (
              <LinkCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="carriers" className="border-y border-slate-200/70 bg-slate-50/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Identify &amp; Prevent Hereditary Disease
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Personalized screening based on individual needs
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              A genetic counselor recommends one of several screening methods to identify hereditary diseases. If a genetic mutation is found, PGD during an IVF cycle can be used to help avoid passing the hereditary disease to future children.
            </p>
            <div className="mt-8 rounded-3xl border border-teal-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">When screening may be considered</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Known hereditary disease in the family history.</li>
                <li>Unidentified hereditary disease patterns within the family.</li>
                <li>No family history, but testing is preferred as an added precaution.</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-5">
            {services.hereditary.map((service) => (
              <LinkCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="pregnancy" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-200/80">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">Genetic Testing During Pregnancy</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Two services for pregnant women
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Fakih IVF offers non-invasive prenatal diagnosis for earlier screening and a products of conception analysis for women who have experienced miscarriage and want to understand the cause of pregnancy loss.
            </p>
            <div id="geneus" className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">Geneus® risk assessment</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Genetic risk assessment is also available through Geneus®, adding another path for patients seeking deeper insight into inherited conditions and reproductive planning.
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            {services.pregnancy.map((service) => (
              <LinkCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
