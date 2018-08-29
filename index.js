
//Show projects
function showProjects() {
    let allProjects = `
    <section role='region' class='travel-BankEx'>
        <p>Hi</p>
    </section>
    `;
    $('#about').hide();
    $('#skills').hide();
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


function handleCreateApp() {
    listProject();
    listContactInfo();
    routie('', function() {
        $('#projects-page').hide();
        $('#contact-page').hide();
        let outputElem = $('#landing');
        outputElem
            .prop('hidden', false)
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