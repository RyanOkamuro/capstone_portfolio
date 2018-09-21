
//Projects page
function showProjects() {
    let allProjects = `
    <section role='region' class='travel-BankEx'>
        <h2>Capstone Projects</h2>
        <div class='row'>
            <div class='col-4-project-image-container'>
                <img src='./images/Travel_BankEx_Landing_Page.JPG' alt='travel-BankEx' class='travel-BankEx-img'>
            </div>
            <div class='col-8'>
                <h3 class='project-title'>Travel BankEx</h3>
                <p class='capstone-languages'>jQuery · JavaScript · HTML5 · CSS3</p>
                <p class='project-description'>Ever find yourself traveling abroad and switching between apps to find the exchange rate & a bank?</p>
                <p class='project-description'>Travel BankEx solves this shortcoming by utilizing Google Maps and The Free Currency Converter API to display both on one page.</p>
                <div class='view-project-buttons'>
                    <button role='button' type='button' class='js-view-demo-TBE'>App</button>
                    <button role='button' type='button' class='js-client-code-TBE'>Code</button>
                </div>
            </div>
        </div>
        <div class='row'>
            <div class='col-4-project-image-container'>
                <img src='./images/Wine_Select_Landing_Page.JPG' alt='wine-select' class='wine-select-img'>
            </div>
            <div class='col-8'>
                <h4 class='project-title'>Wine Select</h4>
                <p class='capstone-languages'>jQuery · Node.js · JavaScript · HTML5 · CSS3</p>
                <p class='project-description'>You don't need to be a wine connoisseur to pick the perfect bottle of wine for dinner.</p> 
                <p class='project-description'>Select a bottle based on a database collection of red/white wine and customer reviews.</p>
                <div class='view-project-buttons'>
                    <button role='button' type='button' class='js-view-demo-WS'>App</button>
                    <button role='button' type='button' class='js-server-code-WS'>Code</button>
                </div>
            </div>
        </div>
        <div class='row'>
            <div class='col-4-project-image-container'>
                <img src='./images/Deal_Hacker_Landing_Page.JPG' alt='deal-hacker' class='deal-hacker-img'>
            </div>
            <div class='col-8'>
                <h5 class='project-title'>Deal Hacker</h5>
                <p class='capstone-languages'>React · Node.js · Express · HTML5 · CSS3</p>
                <p class='project-description'>Ready to purchase a new laptop but don't know if you are getting the best deal online?</p>
                <p class='project-description'>Users post the best sale deals in one central place and leave comments whether they believe this is the best sale.</p>
                <div class='view-project-buttons'>
                    <button role='button' type='button' class='js-view-demo-DH'>App</button>
                    <button role='button' type='button' class='js-client-code-DH'>Client</button>
                    <button role='button' type='button' class='js-server-code-DH'>Server</button>
                </div>
            </div>
        </div>
    </section>
    `;
    $('#about').hide();
    $('#skills').hide();
    $('h2').hide();
    $('#contact-page').hide()
    let outputElem = $('#projects-page');
    outputElem
        .prop('hidden', false)
        .html(allProjects);
    $('#projects-page').show();
}

//Contact me page
function showContactMe() {
    let contact = `
    <section role='region' class='contact-ryan'>
        <h2>Contact Me</h2>
        <p class='contact-me-info'>Feel free to contact me. I look forward to utilzing my project management and front-end skills to move your company foward!</p>
        <div class='contact-info-center'>
            <a href='mailto:RyanOkamuro@gmail.com'>
                <img src='./images/email-logo.png' alt='email' class='contact-connect-me-email'>
            </a>
            <a href='https://github.com/RyanOkamuro'>
                <img src='./images/github-logo.png' alt='github' class='contact-connect-me'>
            </a>
            <a href='https://www.linkedin.com/in/RyanOkamuro/'>
                <img src='./images/linkedin-logo.png' alt='linkedin' class='contact-connect-me'>
            </a>
        </div>
    </section>
    `;
    $('#about').hide();
    $('#skills').hide();
    $('h2').hide();
    $('#projects-page').hide()
    let outputElem = $('#contact-page');
    outputElem
        .prop('hidden', false)
        .html(contact);
    $('#contact-page').show();
}

function listProject() {
    $('#project-link').click(function() {
        showProjects();
        routie('projects')
    });
}

function listContactInfo() {
    $('#contact-link').click(function() {
        showContactMe();
        routie('contact-me')
    });
}

function TravelBankExClientCode() {
    $('#projects-page').on('click', '.js-client-code-TBE', event => {
        window.location='https://github.com/RyanOkamuro/Travel-BankEx';
    });
}

function TravelBankExDemoView() {
    $('#projects-page').on('click', '.js-view-demo-TBE', event => {
        window.location='https://ryanokamuro.github.io/Travel-BankEx';
    });
}

function WineSelectSeverCode() {
    $('#projects-page').on('click', '.js-server-code-WS', event => {
        window.location='https://github.com/RyanOkamuro/wine_select';
    });
}

function WineSelectDemoView() {
    $('#projects-page').on('click', '.js-view-demo-WS', event => {
        window.location='https://wine-select.herokuapp.com';
    });
}

function DealHackerClientCode() {
    $('#projects-page').on('click', '.js-client-code-DH', event => {
        window.location='https://github.com/RyanOkamuro/deal-hacker';
    });
}

function DealHackerSeverCode() {
    $('#projects-page').on('click', '.js-server-code-DH', event => {
        window.location='https://github.com/RyanOkamuro/deal-hacker-api';
    });
}

function DealHackerDemoView() {
    $('#projects-page').on('click', '.js-view-demo-DH', event => {
        window.location='https://deal-hacker.herokuapp.com/';
    });
}

function handleCreateApp() {
    listProject();
    listContactInfo();
    TravelBankExClientCode();
    TravelBankExDemoView();
    WineSelectSeverCode();
    WineSelectDemoView();
    DealHackerClientCode();
    DealHackerSeverCode();
    DealHackerDemoView();
    routie('', function() {
        $('#projects-page').hide();
        $('#contact-page').hide();
        let outputElem = $('#landing');
        outputElem
            .prop('hidden', false)
            $('h2').show();
            $('#about').show();
            $('#skills').show();
            $('#landing').show();
            let current = document.getElementsByClassName('active');
            current[0].classList.remove('active')
            document.querySelector('.home').classList.add('active');
    });
    routie('projects', function() {
        showProjects();
        let current = document.getElementsByClassName('active');
        current[0].classList.remove('active')
        document.querySelector('.projects').classList.add('active');
    });  
    routie('contact-me', function() {
        showContactMe();
        let current = document.getElementsByClassName('active');
        current[0].classList.remove('active')
        document.querySelector('.contact').classList.add('active');
    });  
}

$(handleCreateApp);