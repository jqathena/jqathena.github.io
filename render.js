var children = ""
var hide = [];
items.forEach((item, idx) => {
    hide.push(true)
    if(idx % 2 != 0) {
        children += 
    `<div class="js-timeline_item ag-timeline_item"><div class="ag-timeline-card_box"><div class="ag-timeline-card_meta-box"><div class="ag-timeline-card_meta">${item.date}</div></div><div class="js-timeline-card_point-box ag-timeline-card_point-box"><div class="ag-timeline-card_point">${idx}</div></div></div><div class="ag-timeline-card_item"><div class="ag-timeline-card_inner"><div class="ag-timeline-card_info"><div class="ag-timeline-card_title">${item.title}</div><div class="ag-timeline-card_desc" style="font-weight: bold;">${item.subtitle}</div><div class="ag-timeline-card_desc" id='${idx}-text'>${item.text}</div><div class="ag-timeline-card_desc" id=${idx} style='color: #610505'>read more</div></div></div><div class="ag-timeline-card_arrow"></div></div></div>`
    } else {
      children += `<div class="js-timeline_item ag-timeline_item"><div class="ag-timeline-card_box"><div class="js-timeline-card_point-box ag-timeline-card_point-box"><div class="ag-timeline-card_point">${idx}</div></div><div class="ag-timeline-card_meta-box"><div class="ag-timeline-card_meta">${item.date}</div></div></div><div class="ag-timeline-card_item"><div class="ag-timeline-card_inner"><div class="ag-timeline-card_info"><div class="ag-timeline-card_title">${item.title}</div><div class="ag-timeline-card_desc" style="font-weight: bold">${item.subtitle}</div><div class="ag-timeline-card_desc"} id='${idx}-text'>${item.text}</div><div class="ag-timeline-card_desc" id=${idx} style='color: #610505'>read more</div></div></div><div class="ag-timeline-card_arrow"></div></div></div>`
    }
})

window.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementsByClassName('ag-timeline_list')[0];
    element.innerHTML += children;
    updateRender();
    items.forEach((item, idx) => {
        var el = document.getElementById(idx);
        el.style.cursor = 'pointer';
        el.onclick = () => {
            hide[idx] = !hide[idx];
            updateRender();
        }

        el.onmouseover = function() {
            this.style.color = 'red';
        };
        el.onmouseout = function() {
            this.style.color = '#610505';
        };
    
    })
});

function updateRender() {
    items.forEach((item, idx) => {
        var el = document.getElementById(idx);
        var text = document.getElementById(idx + '-text')

    if(hide[idx]) {
        el.innerHTML = 'read more'
        text.style.overflow ='hidden'
        text.style.display = '-webkit-box';
        text.style.webkitLineClamp = 4;
        text.style.webkitBoxOrient = 'vertical';
    } else {
        el.innerHTML = 'show less'
        text.style.overflow = 'visible'
        text.style.display = 'block'
    }});
}

