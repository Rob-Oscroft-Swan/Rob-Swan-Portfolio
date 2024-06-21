import PageHeader from "../components/PageHeader";
import WhatsappMessage from "../components/WhatsappMessage";

function LifeCoaching() {
    return (
        <div>
            <PageHeader />
            <div style={{padding: '1em'}}>
                <div style={{fontSize: '1.75em', paddingLeft: '0.5em', textDecoration: 'underline'}}>
                    What is Life Coaching?
                </div>
                <div style={{padding: '0.5em'}}>
                    Life coaching is all about helping you achieve your personal and professional goals. It involves
                    working together to identify your aspirations, overcome obstacles, and create actionable plans to
                    reach your desired outcomes. This process is highly collaborative and tailored to your unique needs,
                    providing you with the tools and strategies to navigate challenges effectively. Life coaching offers
                    continuous support, motivation, and accountability, ensuring you stay on track and make consistent
                    progress.
                </div>
                <div style={{padding: '0.5em'}}>
                    Focusing on areas such as career, relationships, personal growth, health, and work-life balance, life coaching addresses multiple facets of your life to foster overall well-being. It empowers you to make informed decisions, build resilience, and develop skills that enhance your quality of life. Unlike therapy, which delves into emotional healing and mental health, life coaching is future-focused, emphasising practical goal-setting, personal development, and the achievement of specific objectives.
                </div>
                <div style={{padding: '0.5em'}}>
                    Ultimately, life coaching is about cultivating confidence, focus, and forgiveness, essential components for leading a more fulfilling and balanced life. It’s a journey of self-discovery and empowerment, where you learn to trust yourself, stay focused on your priorities, and let go of past mistakes. By embracing these principles, you can unlock your potential and create a life that truly reflects your values and aspirations.
                </div>
            </div>
            <WhatsappMessage />
        </div>
    )
}

export default LifeCoaching;
