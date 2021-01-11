import React from 'react'

function checkbox() {
    return (
    <div>
<input class="inp-cbx" id="morning" type="checkbox" />
<label class="cbx" for="morning"><span><svg width="12px" height="10px">
            <use href="#check"></use>
        </svg></span></label>
<svg class="inline-svg">
    <symbol id="check" viewbox="0 0 12 10">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
    </symbol>
</svg>
</div>

    )
}

export default checkbox
