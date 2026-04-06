import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
    useEffect(() => {
        const header = document.querySelector('.top-nav');
        const target = document.getElementById('privacy-top') || document.querySelector('.privacy-page .page-header');
        const headerHeight = header ? header.offsetHeight : 80;
        if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            window.scrollTo({ top, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="privacy-page container fade-in" id="privacy-top">
            <div className="page-header">
                <h1>Privacy Policy</h1>
                <p>Last updated: April 6, 2026</p>
            </div>

            <div className="privacy-content">
                <section>
                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
                        This may include your name, email address, shipping address, payment information, and any other information you choose to provide.
                    </p>
                </section>

                <section>
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Process and fulfill your orders;</li>
                        <li>Send you important updates about your orders and account;</li>
                        <li>Respond to your customer service requests;</li>
                        <li>Send you marketing communications (with your consent);</li>
                        <li>Improve our website and services;</li>
                        <li>Prevent fraud and maintain security.</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Information Sharing</h2>
                    <p>
                        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
                        except as described in this policy. We may share your information with:
                    </p>
                    <ul>
                        <li>Service providers who help us operate our business;</li>
                        <li>Payment processors to complete transactions;</li>
                        <li>Shipping companies to deliver your orders;</li>
                        <li>Legal authorities when required by law.</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect your personal information against unauthorized access,
                        alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                <section>
                    <h2>5. Cookies and Tracking</h2>
                    <p>
                        We use cookies and similar technologies to enhance your browsing experience, analyze site traffic,
                        and personalize content. You can control cookie settings through your browser preferences.
                    </p>
                </section>

                <section>
                    <h2>6. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access the personal information we hold about you;</li>
                        <li>Correct inaccurate or incomplete information;</li>
                        <li>Request deletion of your personal information;</li>
                        <li>Opt out of marketing communications;</li>
                        <li>Data portability in certain circumstances.</li>
                    </ul>
                </section>

                <section>
                    <h2>7. Data Retention</h2>
                    <p>
                        We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy,
                        unless a longer retention period is required by law.
                    </p>
                </section>

                <section>
                    <h2>8. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
                        We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                </section>

                <section>
                    <h2>9. Children's Privacy</h2>
                    <p>
                        Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
                        If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                    </p>
                </section>

                <section>
                    <h2>10. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page
                        and updating the "Last updated" date.
                    </p>
                </section>

                <section>
                    <h2>11. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy or our privacy practices, please contact us through our website
                        or customer service channels.
                    </p>
                </section>
            </div>

            <div className="page-navigation">
                <Link to="/" className="nav-link">← Back to Shop</Link>
            </div>
        </div>
    );
};

export default PrivacyPolicy;