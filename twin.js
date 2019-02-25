//default value
var defaults = {
    id: 'modal-twin',
    btn_className: 'btn btn-light',
    btn_text: 'hello',
    mt_close: false
}

var twin = function(val)
{
    var id          = val.id,
        content     = val.content,
        m_header    = null,
        mt_text     = val.title.text,
        mt_class    = val.title.className,
        mt_close    = val.title.closeBtn,
        mt_close_html = "",
        htmlButtons = "",
        buttons     = val.buttons;
    
    if(id == "")
    {
        id = defaults.id
    }
    if(mt_text.length > 0)
    {
        m_header =
        `<div class="modal-header">
            <h5 class="modal-title`+ mt_class +`">`+ mt_text +`</h5>
            `+ mt_close_html +`
        </div>`;
    }
    if(mt_close != false)
    {
        mt_close_html   = 
        `<button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>`;
    }

    if(Object.keys(buttons).length > 0)
    {
        btnlen = Object.keys(buttons).length;
        for(btnindex in buttons)
        {
            className = buttons[btnindex]['className'];
            if(className == "" || className == undefined)
            {
                className = defaults.btn_className;
            }
            btntext = buttons[btnindex]['text'];
            if(btntext == "" || btntext == undefined)
                btntext = defaults.btn_text;
            htmlButtons += "<button class='"+ className +"'>" + btntext + "</button>";
        }
    }
    else
    {
        console.error('problem with buttons array');
    }

    if(!val.content)
    {
        console.error('content must be filled');
    }
    else
    {
        var createHtml =
        `<div class="modal" tabindex="-1" role="dialog" id="`+ id +`">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                        `+ m_header +`
                    <div class="modal-body">
                        ` + content + `
                    </div>
                    <div class="modal-footer">
                        `+ htmlButtons +`
                    </div>
                </div>
            </div>
        </div>`;
        document.body.innerHTML += createHtml;
        $('#'+id).modal('show');
    }
}
