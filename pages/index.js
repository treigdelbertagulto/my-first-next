import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    I am a software engineer intern from Angeles University Foundation.
                    My favorite language is Kotlin.
                    My specialty is native Android development.
                    I do not have much experience in web, all I had before was{' '}
                    <a href="https://github.com/herb-ivores/graphite" target="_blank">2 days of React</a>.
                </p>
                <p>
                    When I first got to TwistResources, I was bombarded with forms that I had to fill up.
                    I was quite overwhelmed, but the people were really nice and accommodating.
                    Our training started with a bit of technology I wasn't very familiar with.
                    It made me feel like the environment is going to be very friendly, without compromising our growth and training.
                </p>
                <p>
                    From this, I expect to expand my knowledge even further in TwistResources.
                    I also would like to have first-hand experience in working on a project.
                    I am very excited to work with the team.
                </p>
            </section>
        </Layout>
    );
}