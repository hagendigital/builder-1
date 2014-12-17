// Generated by CoffeeScript 1.8.0
(function() {
  var ContainerBaseComponent,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ContainerBaseComponent = (function(_super) {
    __extends(ContainerBaseComponent, _super);

    function ContainerBaseComponent(config) {
      this.config = config != null ? config : {};
      ContainerBaseComponent.__super__.constructor.call(this, this.config);
      Vue.component(this.componentName, {
        template: "#" + this.componentName,
        methods: {
          addChild: function() {
            return this.$parent.items.splice(this.$index + 1, 0, {
              component: 'item-image-component'
            });
          }
        },
        data: (function(_this) {
          return function() {
            return _this.config;
          };
        })(this)
      });
      if (typeof this.init === "function") {
        this.init();
      }
    }

    return ContainerBaseComponent;

  })(Component);

}).call(this);
