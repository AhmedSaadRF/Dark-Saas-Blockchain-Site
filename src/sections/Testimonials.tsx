
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
    name: "Erica Wyatt",
    title: "Product Manager - BlockLink",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "Our productivity has skyrocketed since we started using Blockforge. it's a game-changer for our team.",
    name: "Noel Baldwin",
    title: "Lead Developer - BitBridge",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg",
  },
  {
    text: "The integration process was seamless, and the performance improvements are beyond our expectations.",
    name: "Harry Bender",
    title: "CTO - CryptoSolutions",
    avatarImage: "/assets/images/avatar-harry-bender.jpg",
  },
];

export const TestimonialsSection = () => {
  return (
    <section>
      <div>
        <div>
          {testimonials.map((testimonial, testimonialIndex) => (
            <blockquote key={testimonialIndex}>
              <p>
                &ldquo;{testimonial.text}&ldquo;
              </p>
              <cite>
                <div>
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div>
                      {testimonial.name}
                    </div>
                    <div>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
