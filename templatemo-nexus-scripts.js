// Initialize mobile menu functionality
        function initializeMobileMenu() {
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
            const mobileMenuClose = document.getElementById('mobileMenuClose');
            const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');
            const mobileMenuCta = document.querySelector('.mobile-menu-cta');
            const mobileMenuCtaButton = document.querySelector('.mobile-menu-cta a');
            const mobileMenuLogo = document.querySelector('.mobile-menu-logo');

            // Check if essential elements exist
            if (!mobileMenuBtn || !mobileMenu || !mobileMenuOverlay || !mobileMenuClose) {
                return;
            }

            function openMobileMenu() {
                mobileMenuBtn.classList.add('active');
                mobileMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Reset and trigger animations for links
                mobileMenuLinks.forEach((link, index) => {
                    if (link) {
                        link.style.animation = 'none';
                        link.style.opacity = '0';
                        link.style.transform = 'translateX(20px)';
                        
                        // Apply animation with delay
                        setTimeout(() => {
                            if (link) {
                                link.style.animation = `slideInLeft 0.4s ease forwards`;
                            }
                        }, 250 + (index * 100));
                    }
                });
                
                // Animate CTA button
                if (mobileMenuCta) {
                    mobileMenuCta.style.animation = 'none';
                    mobileMenuCta.style.opacity = '0';
                    mobileMenuCta.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        if (mobileMenuCta) {
                            mobileMenuCta.style.animation = 'slideInUp 0.4s ease forwards';
                        }
                    }, 100);
                }
            }

            function closeMobileMenu() {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            // Toggle mobile menu
            mobileMenuBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            });

            // Close mobile menu
            mobileMenuClose.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeMobileMenu();
            });
            
            mobileMenuOverlay.addEventListener('click', (e) => {
                e.stopPropagation();
                closeMobileMenu();
            });

            // Close menu when clicking on navigation links
            mobileMenuLinks.forEach(link => {
                if (link) {
                    link.addEventListener('click', () => {
                        closeMobileMenu();
                    });
                }
            });

            // Close menu when clicking on CTA button
            if (mobileMenuCtaButton) {
                mobileMenuCtaButton.addEventListener('click', (e) => {
                    if (mobileMenuCtaButton.getAttribute('href') === '#') {
                        e.preventDefault();
                    }
                    closeMobileMenu();
                });
            }

            // Close menu when clicking on logo
            if (mobileMenuLogo) {
                mobileMenuLogo.addEventListener('click', () => {
                    closeMobileMenu();
                });
            }

            // Close mobile menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });

            // Prevent body scroll when menu is open
            if (mobileMenu) {
                mobileMenu.addEventListener('touchmove', (e) => {
                    e.stopPropagation();
                });
            }
        }

        // Initialize mobile menu when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeMobileMenu);
        } else {
            initializeMobileMenu();
        }

        // Generate Matrix Rain Effect
        function generateMatrixRain() {
            const matrixRain = document.getElementById('matrixRain');
            const characters = '01000001 01001110 01010110 01001001 01001011 01010011 01001000 01000001 00001010 ';
            const columns = Math.floor(window.innerWidth / 20);
            
            for (let i = 0; i < columns; i++) {
                const column = document.createElement('div');
                column.className = 'matrix-column';
                column.style.left = `${i * 20}px`;
                column.style.animationDuration = `${Math.random() * 5 + 10}s`;
                column.style.animationDelay = `${Math.random() * 5}s`;
                
                // Generate random characters for the column
                let text = '';
                const charCount = Math.floor(Math.random() * 20 + 10);
                for (let j = 0; j < charCount; j++) {
                    text += characters[Math.floor(Math.random() * characters.length)] + ' ';
                }
                column.textContent = text;
                
                matrixRain.appendChild(column);
            }
        }

        // Generate Floating Particles
        function generateParticles() {
            const particlesContainer = document.getElementById('particlesContainer');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 20}s`;
                particle.style.animationDuration = `${Math.random() * 10 + 20}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Generate Data Streams
        function generateDataStreams() {
            const dataStreams = document.getElementById('dataStreams');
            const streamCount = 10;
            
            for (let i = 0; i < streamCount; i++) {
                const stream = document.createElement('div');
                stream.className = 'data-stream';
                stream.style.top = `${Math.random() * 100}%`;
                stream.style.left = `-300px`;
                stream.style.animationDelay = `${Math.random() * 5}s`;
                stream.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
                
                dataStreams.appendChild(stream);
            }
        }

        // Initialize background effects
        generateMatrixRain();
        generateParticles();
        generateDataStreams();

        // Regenerate matrix rain on window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const matrixRain = document.getElementById('matrixRain');
                matrixRain.innerHTML = '';
                generateMatrixRain();
            }, 250);
        });

        //hero title glitch effect
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval = null;
        
        function glitchTextEffect(target) {
            let iteration = 0;
            clearInterval(interval);
        
            const original = target.dataset.value;
        
            interval = setInterval(() => {
                target.innerText = original
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return original[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");
        
                if (iteration >= original.length) {
                    clearInterval(interval);
                }
        
                iteration += 1 / 3;
            }, 45);
        }
        
        document.addEventListener("DOMContentLoaded", () => {
            const glitchTarget = document.querySelector(".hero-Anviksha");
        
            glitchTextEffect(glitchTarget);
        });

        //countdown timer
        document.addEventListener('DOMContentLoaded', () => {
            let timer_ = 1757734200//unix timestamp
            let flipdown = new FlipDown(timer_)
                .start()
                .ifEnded(() => {
                    document.querySelector(".flipdown").innerHTML = `<h2>Timer is ended</h2>`;
                })
        })

        "use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FlipDown = function () {
  function FlipDown(uts) {
    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "flipdown";
    var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, FlipDown);

    if (typeof uts !== "number") {
      throw new Error("FlipDown: Constructor expected unix timestamp, got ".concat(_typeof(uts), " instead."));
    }

    if (_typeof(el) === "object") {
      opt = el;
      el = "flipdown";
    }

    this.version = "0.3.2";
    this.initialised = false;
    this.now = this._getTime();
    this.epoch = uts;
    this.countdownEnded = false;
    this.hasEndedCallback = null;
    this.element = document.getElementById(el);
    this.rotors = [];
    this.rotorLeafFront = [];
    this.rotorLeafRear = [];
    this.rotorTops = [];
    this.rotorBottoms = [];
    this.countdown = null;
    this.daysRemaining = 0;
    this.clockValues = {};
    this.clockStrings = {};
    this.clockValuesAsString = [];
    this.prevClockValuesAsString = [];
    this.opts = this._parseOptions(opt);

    this._setOptions();

    console.log("FlipDown ".concat(this.version, " (Theme: ").concat(this.opts.theme, ")"));
  }

  _createClass(FlipDown, [{
    key: "start",
    value: function start() {
      if (!this.initialised) this._init();
      this.countdown = setInterval(this._tick.bind(this), 1000);
      return this;
    }
  }, {
    key: "ifEnded",
    value: function ifEnded(cb) {
      this.hasEndedCallback = function () {
        cb();
        this.hasEndedCallback = null;
      };

      return this;
    }
  }, {
    key: "_getTime",
    value: function _getTime() {
      return new Date().getTime() / 1000;
    }
  }, {
    key: "_hasCountdownEnded",
    value: function _hasCountdownEnded() {
      if (this.epoch - this.now < 0) {
        this.countdownEnded = true;

        if (this.hasEndedCallback != null) {
          this.hasEndedCallback();
          this.hasEndedCallback = null;
        }

        return true;
      } else {
        this.countdownEnded = false;
        return false;
      }
    }
  }, {
    key: "_parseOptions",
    value: function _parseOptions(opt) {
      var headings = ["Days", "Hours", "Minutes", "Seconds"];

      if (opt.headings && opt.headings.length === 4) {
        headings = opt.headings;
      }

      return {
        theme: opt.hasOwnProperty("theme") ? opt.theme : "dark",
        headings: headings
      };
    }
  }, {
    key: "_setOptions",
    value: function _setOptions() {
      this.element.classList.add("flipdown__theme-".concat(this.opts.theme));
    }
  }, {
    key: "_init",
    value: function _init() {
      this.initialised = true;

      if (this._hasCountdownEnded()) {
        this.daysremaining = 0;
      } else {
        this.daysremaining = Math.floor((this.epoch - this.now) / 86400).toString().length;
      }

      var dayRotorCount = this.daysremaining <= 2 ? 2 : this.daysremaining;

      for (var i = 0; i < dayRotorCount + 6; i++) {
        this.rotors.push(this._createRotor(0));
      }

      var dayRotors = [];

      for (var i = 0; i < dayRotorCount; i++) {
        dayRotors.push(this.rotors[i]);
      }

      this.element.appendChild(this._createRotorGroup(dayRotors, 0));
      var count = dayRotorCount;

      for (var i = 0; i < 3; i++) {
        var otherRotors = [];

        for (var j = 0; j < 2; j++) {
          otherRotors.push(this.rotors[count]);
          count++;
        }

        this.element.appendChild(this._createRotorGroup(otherRotors, i + 1));
      }

      this.rotorLeafFront = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front"));
      this.rotorLeafRear = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear"));
      this.rotorTop = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top"));
      this.rotorBottom = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom"));

      this._tick();

      this._updateClockValues(true);

      return this;
    }
  }, {
    key: "_createRotorGroup",
    value: function _createRotorGroup(rotors, rotorIndex) {
      var rotorGroup = document.createElement("div");
      rotorGroup.className = "rotor-group";
      var dayRotorGroupHeading = document.createElement("div");
      dayRotorGroupHeading.className = "rotor-group-heading";
      dayRotorGroupHeading.setAttribute("data-before", this.opts.headings[rotorIndex]);
      rotorGroup.appendChild(dayRotorGroupHeading);
      appendChildren(rotorGroup, rotors);
      return rotorGroup;
    }
  }, {
    key: "_createRotor",
    value: function _createRotor() {
      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var rotor = document.createElement("div");
      var rotorLeaf = document.createElement("div");
      var rotorLeafRear = document.createElement("figure");
      var rotorLeafFront = document.createElement("figure");
      var rotorTop = document.createElement("div");
      var rotorBottom = document.createElement("div");
      rotor.className = "rotor";
      rotorLeaf.className = "rotor-leaf";
      rotorLeafRear.className = "rotor-leaf-rear";
      rotorLeafFront.className = "rotor-leaf-front";
      rotorTop.className = "rotor-top";
      rotorBottom.className = "rotor-bottom";
      rotorLeafRear.textContent = v;
      rotorTop.textContent = v;
      rotorBottom.textContent = v;
      appendChildren(rotor, [rotorLeaf, rotorTop, rotorBottom]);
      appendChildren(rotorLeaf, [rotorLeafRear, rotorLeafFront]);
      return rotor;
    }
  }, {
    key: "_tick",
    value: function _tick() {
      this.now = this._getTime();
      var diff = this.epoch - this.now <= 0 ? 0 : this.epoch - this.now;
      this.clockValues.d = Math.floor(diff / 86400);
      diff -= this.clockValues.d * 86400;
      this.clockValues.h = Math.floor(diff / 3600);
      diff -= this.clockValues.h * 3600;
      this.clockValues.m = Math.floor(diff / 60);
      diff -= this.clockValues.m * 60;
      this.clockValues.s = Math.floor(diff);

      this._updateClockValues();

      this._hasCountdownEnded();
    }
  }, {
    key: "_updateClockValues",
    value: function _updateClockValues() {
      var _this = this;

      var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.clockStrings.d = pad(this.clockValues.d, 2);
      this.clockStrings.h = pad(this.clockValues.h, 2);
      this.clockStrings.m = pad(this.clockValues.m, 2);
      this.clockStrings.s = pad(this.clockValues.s, 2);
      this.clockValuesAsString = (this.clockStrings.d + this.clockStrings.h + this.clockStrings.m + this.clockStrings.s).split("");
      this.rotorLeafFront.forEach(function (el, i) {
        el.textContent = _this.prevClockValuesAsString[i];
      });
      this.rotorBottom.forEach(function (el, i) {
        el.textContent = _this.prevClockValuesAsString[i];
      });

      function rotorTopFlip() {
        var _this2 = this;

        this.rotorTop.forEach(function (el, i) {
          if (el.textContent != _this2.clockValuesAsString[i]) {
            el.textContent = _this2.clockValuesAsString[i];
          }
        });
      }

      function rotorLeafRearFlip() {
        var _this3 = this;

        this.rotorLeafRear.forEach(function (el, i) {
          if (el.textContent != _this3.clockValuesAsString[i]) {
            el.textContent = _this3.clockValuesAsString[i];
            el.parentElement.classList.add("flipped");
            var flip = setInterval(function () {
              el.parentElement.classList.remove("flipped");
              clearInterval(flip);
            }.bind(_this3), 500);
          }
        });
      }

      if (!init) {
        setTimeout(rotorTopFlip.bind(this), 500);
        setTimeout(rotorLeafRearFlip.bind(this), 500);
      } else {
        rotorTopFlip.call(this);
        rotorLeafRearFlip.call(this);
      }

      this.prevClockValuesAsString = this.clockValuesAsString;
    }
  }]);

  return FlipDown;
}();

function pad(n, len) {
  n = n.toString();
  return n.length < len ? pad("0" + n, len) : n;
}

function appendChildren(parent, children) {
  children.forEach(function (el) {
    parent.appendChild(el);
  });
}

        //gallery swiperJS
        document.addEventListener('DOMContentLoaded', function () {
            var swiper = new Swiper('.gallery-container', {

            loop: true, 
            spaceBetween: 30,
            // pagination
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
            
            //navigation
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },

            //responsive breakouts
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            }
        });
        });

        // Interactive mouse glow effect (throttled for performance)
        let mouseTimer;
        document.addEventListener('mousemove', (e) => {
            if (!mouseTimer) {
                mouseTimer = setTimeout(() => {
                    const mouseX = e.clientX;
                    const mouseY = e.clientY;
                    
                    // Move orbs slightly based on mouse position
                    const orbs = document.querySelectorAll('.orb');
                    orbs.forEach((orb, index) => {
                        const speed = (index + 1) * 0.02;
                        const x = (mouseX - window.innerWidth / 2) * speed;
                        const y = (mouseY - window.innerHeight / 2) * speed;
                        orb.style.transform = `translate(${x}px, ${y}px)`;
                    });
                    
                    mouseTimer = null;
                }, 16); // ~60fps
            }
        });

        // Add a glow that follows the cursor (desktop only)
        if (window.innerWidth > 768) {
            const cursorGlow = document.createElement('div');
            cursorGlow.style.cssText = `
                position: fixed;
                width: 400px;
                height: 400px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
                transition: opacity 0.3s ease;
                opacity: 0;
            `;
            document.body.appendChild(cursorGlow);

            document.addEventListener('mousemove', (e) => {
                cursorGlow.style.left = e.clientX + 'px';
                cursorGlow.style.top = e.clientY + 'px';
                cursorGlow.style.opacity = '1';
            });

            document.addEventListener('mouseleave', () => {
                cursorGlow.style.opacity = '0';
            });
        }

        //filter for events
        document.addEventListener('DOMContentLoaded',function(){
            const filterButtons = document.querySelectorAll(".filter-button");
            const events = document.querySelectorAll(".events-grid .events-card");

            const filterCards = e => {
            document.querySelector(".filter-button.active")?.classList.remove("active");
            e.target.classList.add("active");

            events.forEach(card => {
                card.classList.add("hide");
                if (
                card.dataset.name === e.target.dataset.name ||
                e.target.dataset.name === "all"
                ) {
                card.classList.remove("hide");
                }
            });
            };

            filterButtons.forEach(button =>
            button.addEventListener("click", filterCards)
            );
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                // Only prevent default and scroll if href is more than just '#'
                if (href && href.length > 1) {
                    e.preventDefault();
                    if (href === '#top') {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    } else {
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                }
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.05, 
            rootMargin: '0px 0px -20px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(el => {
            observer.observe(el);
        });

        document.addEventListener('DOMContentLoaded', function () {
            const filterButtons = document.querySelectorAll(".filter-button");
            const events = document.querySelectorAll(".events-grid .events-card");
        
            const filterCards = e => {
                document.querySelector(".filter-button.active")?.classList.remove("active");
                e.target.classList.add("active");
        
                events.forEach(card => {
                    card.classList.add("hide");
                    if (
                        card.dataset.name === e.target.dataset.name ||
                        e.target.dataset.name === "all"
                    ) {
                        card.classList.remove("hide");
                    }
                });
            };
        
            filterButtons.forEach(button =>
                button.addEventListener("click", filterCards)
            );
        
            // Trigger default filter (All Events) on load
            const defaultButton = document.querySelector('.filter-button[data-name="all"]');
            if (defaultButton) {
                defaultButton.click();
            }
        });
        

        // Contact form submission
        document.querySelector('.btn-submit').addEventListener('click', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // Simulate form submission
                this.textContent = 'TRANSMITTING...';
                this.style.background = 'linear-gradient(135deg, var(--primary-cyan), var(--primary-pink))';
                
                setTimeout(() => {
                    this.textContent = 'TRANSMISSION COMPLETE';
                    this.style.background = 'var(--primary-cyan)';
                    
                    // Clear form
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('message').value = '';
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        this.textContent = 'Transmit Message';
                        this.style.background = '';
                    }, 3000);
                }, 2000);
            }
        });