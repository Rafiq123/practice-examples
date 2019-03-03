class DataBinding {
    constructor(scope, document, interpolationMatch = ['{', '}']) {
        this.scope = scope;
        this.document = document;
        this.interpolationMatch = interpolationMatch;
        this.configureBindAttributes();
    }

    hasInterPolationBindings = (element) => {
        return element.textContent.indexOf(this.interpolationMatch[0]) > -1 && element.textContent.indexOf(this.interpolationMatch[1]) > -1;
    }

    hasTwoWayBinding = (element) => {
        return element.getAttribute('data-model') != '';
    }

    updateScope = (item) => {
        let property = item.getAttribute('data-model');
        this.scope[property] = item.value;
        this.render();
    }

    configureBindAttributes = () => {
        //to update add the data-bind attribute if it there is interpolation symbol and configure keyup event for data-model to implement two way binding
        var binding = Array.from(this.document.querySelector('[controller]').children);
        binding.forEach((item) => {
            if (this.hasInterPolationBindings(item)) {
                var value = item.textContent.slice(1, -1);
                item.setAttribute('data-bind', value);
            }
            else if (this.hasTwoWayBinding(item)) {
                item.addEventListener('keyup', () => { this.updateScope(item) });
            }
        });
    }

    render = () => {
        var allBinds = Array.from(this.document.querySelectorAll('[data-bind]'));
        allBinds.forEach((item) => {
            item.textContent = this.scope[item.getAttribute('data-bind')];
        });
    }
}