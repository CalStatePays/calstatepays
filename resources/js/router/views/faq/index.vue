<template>
    <div>
        <div class="banner faq-banner align-items-center">
            <h1 class="home__heading faq-header">Frequently Asked Questions</h1>
        </div>
        <div class="container">
            <div class="row justify-content-start align-items-center">
                <div v-for="faq in renderedFaqs" :key="faq.question" class="col-12 col-lg-6 px-3 mb-3">
                    <v-expansion-panels variant="popout">
                        <v-expansion-panel>
                            <v-expansion-panel-title class="font-weight-bold">
                                {{ faq.question }}
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <div class="p-sm-4 faq-panel" v-html="faq.answer"></div>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const faqContent = [
    {
        question: "I can not find my CSU.",
        answer:
            "Currently, Calstatepays.org is limited to the following six participating CSU campuses: California State University Channel Islands, California State University Dominguez Hills, California State University Fullerton, California State University of Long Beach, California State University Northridge and Cal Poly Pomona."
    },
    {
        question: "How many students were followed-up in this study?",
        answer:
            "Over 670,000 students, all of whom entered one of the six participating CSU campuses as first-time freshmen, transfer students, credential or post-baccalaureate students between 1995 and 2018."
    },
    {
        question: "Were all students found?",
        answer:
            "No. Only students who remained in California, and whose earnings were covered by Unemployment Insurance at 2, 5, 10, and 15 years after education exit are included in the study. As a result, students who have moved out of state or are out of the labor market are excluded, as are those in the military, federal employment, or self-employed. Further, the study population was limited to students who, in any given year, had no more than two (2) consecutive quarters without reported earnings."
    },
    {
        question: "I can not find my major.",
        answer:
            "Not every major is offered by every campus. So if the major you are looking for does not appear at a specific campus it may not be offered. Additionally, only majors that meet the required minimum number of students enrolled are reported."
    },
    {
        question: "I can not find an industry I’m interested in.",
        answer:
            "Employment data are provided by industry using the 2-digit North American Industry Classification System (NAICS) classifications, rather than by occupation. Each 2-digit industry classification contains multiple related industries, for example, the Education Industry includes both K-12 education and higher education as well as other education sectors. If you don’t see an industry in a specific table, it is because only industries employing a minimum number of students are reported."
    },
    {
        question: "Are lapses in employment included?",
        answer:
            "Yes. However, individuals who have more than two (2) consecutive quarters without earnings in a year are excluded from the calculations."
    },
    {
        question: "What does \"After Education Exit\" mean?",
        answer:
            "\"After Education Exit\" indicates that students were no longer enrolled in a college or university at the time of the study, regardless of whether they had completed a degree."
    },
    {
        question: "What does \"Some College\" mean?",
        answer:
            "\"Some College\" indicates that a student attended the university in question, but has yet to complete a four-year degree at the time of the study."
    },
    {
        question: "What does \"Data Not Available\" mean?",
        answer:
            "\"Data Not Available\" indicates that we were not able to find the minimum number of data required for the major or industry at the time of the initial study."
    },
    {
        question: "Are students who attained a graduate degree included in earnings data for bachelor degree recipients?",
        answer:
            "No. The Graduate Degree data are confined to Bachelor’s Degree recipients who went on to pursue and complete a post-baccalaureate degree or certificate. Further, such degree recipients have been removed from the earnings data for the Bachelor’s Degree recipients, so those earning figures are for individuals with only a bachelor degrees."
    },
    {
        question: "Are the earnings shown adjusted for inflation?",
        answer: "Yes, they are adjusted to 2018 dollars."
    },
    {
        question: "Where did the earnings data come from?",
        answer:
            "Earnings are reported for California workers who were covered by Unemployment Insurance. Earnings were measured at 2, 5, 10 and 15 years after education exit. As a result, students who have moved out of state or are out of the labor market are excluded, as are those in the military, federal employment, or self-employed."
    },
    {
        question: "What is Personal Financial Return on Education?",
        answer:
            "Personal Financial Return on Education (PFRE), also called Internal Rate of Return to education, is an interest rate-like number that provides information on your financial reward for pursuing a specific bachelor's degree. During school you make an investment by paying for tuition, books and giving up the opportunity to work as much as you could if you were not attending school. After education, you enter the labor force and can earn more money than you would without the bachelor’s degree until you retire. PFRE is the implicit interest rate on this investment. The PFRE calculator is compiled based on the available CSU campuses data for undergraduate degree programs. It uses real earnings data from past CSU graduates."
    },
    {
        question: "What factors affect your Personal Financial Return on Education (PFRE)?",
        answer: `<p>Things that influence your Personal Financial Return on Education (PFRE):</p>
            <ul class="pt-4">
                <li>NOTE: All PFRE results are for students who completed a bachelor degree only.</li>
                <li>The more you could earn without a bachelor’s degree, the more earnings you give up while enrolled - decreasing PFRE. For example, transfer students with an associate degree from a community college have better opportunities to earn more while at CSU than a first-time freshman. The income not earned while enrolled in school is often called opportunity cost.</li>
                <li>The shorter time you spend at CSU, the briefer the investment period, the lower the opportunity cost and, thus, the higher the PFRE.</li>
                <li>The more you earn while obtaining a bachelor’s degree, the less income you give up to get it--increasing PFRE. There can be other effects as well. It might take you longer to graduate (lowering PFRE). You also learn useful things on the job which can make your earnings after graduation greater.</li>
                <li>The more financial aid money you receive (excluding loans), the less you pay to get a bachelor’s degree - increasing PFRE.</li>
                <li>The longer it takes you to graduate, the higher your education costs - decreasing PFRE.</li>
                <li>The earlier you begin work after completing your bachelor degree, the longer you receive higher post-graduation earnings, which increases your PFRE. When older people get education, they have fewer years after graduation and prior to retirement so there is a shorter period of higher earnings and a lower PFRE.</li>
                <li>Majors that produce higher post-graduation earnings will get a higher PFRE.</li>
            </ul>`
    },
    {
        question: "How are industries defined?",
        answer: "Industries are defined using the North American Industrial Classification System (NAICS). Industries are based on the two-digit level of the taxonomy. On the attachment provided <a href=\"__BASE_URL__/NAICS.Codes.With.Majors.xlsx\" title=\"NAICS Codes with Majors file download.\">here</a> we list each industry with its number, definition, and bachelors degrees commonly found in the industry. For example, the industry construction is associated with the NAICS code 23 and is often employed by Civil Engineering majors. <a href=\"https://www.naics.com/search/\" target=\"_blank\">Learn more NAICS here.</a>"
    },
    {
        question: "What is the Power Users Page?",
        answer:
            "This page is an extension of CalStatePays. A link to the Power Users Page can be found near the bottom left hand corner of every page. Data are in the Tableau platform which allows you to design your own data displays. It also contains some measures not included on the main site, such as, Earning while Enrolled. You may also compare earnings by key demographic groups such Age at Entry, Gender, Pell Status and Race. You can access all six campuses combined and CSUN data without a password. To access other campuses, contact the Institutional Research Office at your campus of interest for an account and password."
    },
    {
        question: "Who are Power Users?",
        answer: "Generally, faculty and staff from campuses who contributed data to calstatepays.org."
    },
    {
        question: "What do the educational credential data show in the Power Users section?",
        answer: `<p><span class=\"font-weight-bold\">Credential Type:</span> Shows the various types of educational credentials awarded to the students, such as English, Biological Sciences, Early Childhood Education, Counseling or Administrative. These are based on a three-digit CSU Credential Objective Code. In 2010, a number of these three-digit CSU Credential Objective Codes changed, and in those cases a \"2010\" is denoted next to the credential type.</p>
            <p><span class=\"font-weight-bold\">Note:</span> Licensure and credentialing requirements are set by outside agencies that are not controlled by the CSU system, and requirements may change at any time. The Earnings and Industry data by Credential type is only for those who successfully completed a Credential program and were awarded a credential. The Credential data set is limited to:</p>
            <ol>
                <li>Post Education Earnings (1 to 15 Years After Exit).</li>
                <li>Industry, 5 and 10 Years After Exit.</li>
            </ol>`
    }
];

export default {
    data() {
        return {
            url: window.baseUrl,
            faqs: faqContent
        };
    },
    computed: {
        renderedFaqs() {
            return this.faqs.map(faq => ({
                ...faq,
                answer: faq.answer.replace(/__BASE_URL__/g, this.url)
            }));
        }
    }
};
</script>
