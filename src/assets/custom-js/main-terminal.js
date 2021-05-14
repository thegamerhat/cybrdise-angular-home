const about = document.querySelector('#aboutButton')
const contact = document.querySelector('#contactButton')
const aboutContent = document.querySelector('#aboutContent')
const contactContent = document.querySelector('#contactContent')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    html: ` 
    <h2 style="color: #00aa00;">about-me:$
      <span class="cursor">_</span>
    </h2>
    <p>Hi! I am an <span style="color: #0F94D2;">Arch</span> user btw.</p>
    
    <p style="font-weight: bold;">Check out some of my Community Loved Projects!</p>
    <ol style="font-weight: bold; text-decoration: none; color: #00aa00;">  
      <li href="https://github.com/thegamerhat/quick-vm/">Quick VM</li>
      <li href="https://github.com/thegamerhat/assistant">Linux Assistant</li>
      <li href="https://github.com/thegamerhat/appbook">AppBook</li>
      <li href="https://github.com/thegamerhat/windows-9.5">Windows 9.5</li>
      <li href="https://github.com/thegamerhat/vs-code-mobile">VS Code Mobile</li>
    </ol>
    <div>
      <li>Donate: <a href="https://paypal.me/gamerhat18">PayPal</a></li>
    </div>

    `
    ,
    class: ["no-full"],
    title: 'About',
    background: '#2A2A2A',
    // modal: true,
    width: '430px',
    height: '430px',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    mount: aboutContent,
    // onfocus: function () {
    //   this.setBackground('#00AA00')
    // },
    // onblur: function () {
    //   this.setBackground('#2A2A2A')
    // },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    html: `
    <h2 style="color: #00aa00;">contact-me:$
      <span class="cursor">_</span>
    </h2>
    <p>Social Links: </p>
    <ul>
      <li>Email: <a href="mailto:gamerhat18@protonmail.com">gamerhat18@protonmail.com</a></li>
      <li>Telegram: <a href="https://t.me/thegamerhat">thegamerhat</a></li>
      <li>GitHub: <a href="https://github.com/thegamerhat">thegamerhat</a></li>
      <li>Discord: @gamerhat#2074s</li>
      <li>Twitter: <a href="https://twitter.com/thegamerhat">thegamerhat</a></li>
      <li>Instagram: <a href="https://instagram.com/thegamerhat">thegamerhat</a></li>
    </ul>`,
    class: ["no-full"],
    title: 'Contact',
    background: '#2A2A2A',
    width: '430px',
    height: '380px',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    mount: contactContent,
    // onfocus: function () {
    //   this.setBackground('#00AA00')
    // },
    // onblur: function () {
    //   this.setBackground('#2A2A2A')
    // },
  })
})

contactBox.removeClass("no-full")