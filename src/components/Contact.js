import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <section>
                <form method="post" action="#" id="contactForm">
                    <div class="fields">
                        <div class="field half"><input type="text" name="name" id="name" placeholder="Name" /></div>
                        <div class="field half"><input type="email" name="email" id="email" placeholder="Email" /></div>
                        <div class="field"><textarea name="message" id="message" placeholder="Message" rows="4" /></div>
                    </div>
                    <ul class="actions">
                        <li><input type="submit" value="Send Message" /></li>
                    </ul>
                </form>
            </section>
        );
    }
}
