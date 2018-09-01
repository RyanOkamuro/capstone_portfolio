
//Show projects
function showProjects() {
    let allProjects = `
    <section role='region' class='travel-BankEx'>
        <h2>Capstone Projects</h2>
        <div class='row'>
            <div class='col-4-project-image-container'>
                <img src='./images/Travel_BankEx_Landing_Page.jpg' alt='travel-BankEx' class='travel-BankEx-img'>
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
                <img src='./images/Wine_Select_Landing_Page.jpg' alt='wine-select' class='wine-select-img'>
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
                <img src='./images/Deal_Hacker_Landing_Page.jpg' alt='deal-hacker' class='deal-hacker-img'>
            </div>
            <div class='col-8'>
                <h5 class='project-title'>Deal Hacker</h5>
                <p class='capstone-languages'>React · Node · Express · HTML5 · CSS3</p>
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

function showContactMe() {
    let contact = `
    <section role='region' class='contact-ryan'>
        <p>Great</p>
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
        window.location='https://nameless-reef-48795.herokuapp.com';
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
    })
    routie('projects', function() {
        showProjects();
    });  
    routie('contact-me', function() {
        showContactMe();
    });  

}

$(handleCreateApp);