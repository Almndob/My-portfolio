
        AOS.init({ duration: 1000, once: true });

        new Typed('.typed-text', {
            strings: ['مطور واجهات', 'مبرمج لارافل', 'خريج تقنية معلومات'],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
        });

        const menuBtn = document.getElementById('menuBtn');
        const navLinks = document.getElementById('navLinks');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.querySelector('i').classList.add('fa-bars');
                menuBtn.querySelector('i').classList.remove('fa-times');
            });
        });

        // بيانات المهارات
        const skills = [
            { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26', percent: 95, category: 'تطوير الواجهات' },
            { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6', percent: 90, category: 'تطوير الواجهات' },
            { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e', percent: 85, category: 'لغات البرمجة' },
            { name: 'PHP', icon: 'fab fa-php', color: '#777bb4', percent: 90, category: 'لغات البرمجة' },
            { name: 'Laravel', icon: 'fab fa-laravel', color: '#ff2d20', percent: 75, category: 'أطر العمل' },
            { name: 'MySQL', icon: 'fas fa-database', color: '#4479a1', percent: 89, category: 'قواعد البيانات' },
            { name: 'Bootstrap 5', icon: 'fab fa-bootstrap', color: '#7952b3', percent: 50, category: 'أطر العمل' },
            { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38b2ac', percent: 80, category: 'أطر العمل' },
            { name: 'React', icon: 'fab fa-react', color: '#8bc0d0', percent: 50, category: 'أطر العمل' },
            { name: 'Git & GitHub', icon: 'fab fa-git-alt', color: '#f05032', percent: 85, category: 'أدوات التحكم بالإصدارات' }
        ];


        const projects = [
            {
                id: 1,
                title: "منصة 6Tech للخدمات الطلابية",
                description: "منصة ويب متكاملة لإدارة وتقديم الخدمات الطلابية، صُممت لتسهيل تواصل الطلاب مع مقدمي الخدمات الأكاديمية، مع نظام لإدارة المستخدمين والطلبات ولوحة تحكم إدارية، وواجهة مستخدم حديثة ومتجاوبة.",
                image: "assets/images/6tech.webp",
                link: "https://6tech-sa.com/",
                tags: ["Laravel", "Tailwind CSS", "Alpine.js", "MySQL"]
            },
            {
                id: 2,
                title: "بوابة أمانة حائل الرقمية",
                description: "منصة إلكترونية متكاملة لخدمات أمانة منطقة حائل، تتيح للمواطنين تقديم الطلبات ومتابعتها إلكترونياً.",
                image: "assets/images/HailPortal.webp",
                link: "http://almndwbhailportal.atwebpages.com",
                tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"]
            },
            {
                id: 3,
                title: "نظام التصنيف الذكي لأحياء منطقة حائل",
                description: "نظام ويب متكامل لتقييم ومتابعة جودة الحياة في أحياء منطقة حائل، يوفر معياراً رقمياً واضحاً يدعم اتخاذ القرار لتحسين الخدمات.",
                image: "assets/images/hail_quality_index.webp",
                link: "https://almndob.lovestoblog.com/",
                tags: ["PHP", "Bootstrap 5", "Leaflet.js", "MySQL"]
            },
            {
                id: 4,
                title: "نظام إدارة القروض البنكية",
                description: "نظام ويب لإدارة القروض البنكية، مطور باستخدام PHP وMySQL، يتيح تقديم الطلبات، مراجعتها، الموافقة عليها، ومتابعة السداد.",
                image: "assets/images/seviceChat.webp",
                link: "https://servicechat.lovestoblog.com/",
                tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"]
            },
            {
                id: 5,
                title: "نظام سُبل — sbul",
                description: "منصة إلكترونية متكاملة تهدف إلى تسهيل وصول المصلين إلى المساجد، من خلال ربطهم بالسائقين وتوفير نظام إدارة شامل تحت إشراف الجهة المختصة.",
                image: "assets/images/sbul.webp",
                link: "https://github.com/Almndob/sbul_transport_system",
                tags: ["PHP", "JavaScript", "MySQL", "Leaflet.js"]
            },
            {
                id: 6,
                title: "شبكة اجتماعية لمربي الحيوانات الأليفة",
                description: "منصة ويب مطورة باستخدام PHP وMySQL بنمط MVC، تتيح إنشاء ملفات تعريف للحيوانات الأليفة، ومشاركة المنشورات والصور، والتواصل مع المستخدمين.",
                image: "assets/images/pet-network.webp",
                link: "https://github.com/Almndob/pet-social-network",
                tags: ["PHP", "MVC", "MySQL"]
            },
            {
                id: 7,
                title: "موقع بيع الهواتف المحمولة",
                description: "موقع تجارة إلكترونية لبيع الهواتف المحمولة باستخدام HTML وCSS وPHP وMySQL وJavaScript، مع واجهة مستخدم بسيطة ومتجاوبة.",
                image: "assets/images/mobile-sales.webp",
                link: "https://github.com/Almndob/mobile_sales",
                tags: ["PHP", "HTML", "CSS", "MySQL"]
            },
            {
                id: 8,
                title: "منصة إتمام — Etmam",
                description: "نظام إدارة الخطط والأنشطة المؤسسية مبني بـ PHP وMySQL، يدعم الخطط التشغيلية والاستراتيجية مع نظام صلاحيات متعدد الأدوار.",
                image: "assets/images/etmam.webp",
                link: "https://etmam.lovestoblog.com/",
                tags: ["PHP", "MySQL"]
            },
            {
                id: 9,
                title: "بوابة الطلاب - نظام شامل لمتابعة الطلاب",
                description: "تطبيق ويب حديث ومتجاوب لإدارة معلومات الطلاب، وتعزيز التواصل، ومتابعة الأداء الأكاديمي.",
                image: "assets/images/studentPortal.webp",
                link: "http://almndobstudentportal.atwebpages.com/",
                tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"]
            }
        ];

        const PROJECTS_PER_PAGE = 4;
        let showingAll = false;

        function createProjectCard(project, isHidden = false) {
            const card = document.createElement('a');
            card.href = project.link;
            card.target = "_blank";
            card.style.textDecoration = "none";
            card.style.color = "inherit";
            card.innerHTML = `
                <div class="project-card ${isHidden ? 'hidden-project' : 'visible'}">
                    <div class="project-img">
                        <img src="${project.image}" alt="${project.title} - ${project.tags.join(', ')}" loading="lazy">
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
                        <a href="${project.link}" target="_blank" class="visit-btn"><i class="fas fa-external-link-alt"></i> افتح الموقع</a>

                    </div>
                </div>
            `;
            return card;
        }

        function renderProjects() {
            const container = document.getElementById('projectsGrid');
            container.innerHTML = '';
            
            projects.forEach((project, index) => {
                const isHidden = index >= PROJECTS_PER_PAGE;
                const card = createProjectCard(project, isHidden);
                container.appendChild(card);
            });
        }

        function toggleProjects() {
            const hiddenCards = document.querySelectorAll('.project-card.hidden-project');
            const btn = document.getElementById('showMoreBtn');
            
            if (!showingAll) {
                hiddenCards.forEach((card, index) => {
                    card.classList.remove('hidden-project');
                    card.classList.add('show');
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 150);
                });
                
                btn.innerHTML = '<i class="fas fa-chevron-up"></i> عرض أقل';
                btn.classList.add('active');
                showingAll = true;
            } else {
                hiddenCards.forEach(card => {
                    card.classList.remove('visible', 'show');
                    card.classList.add('hidden-project');
                });
                
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                btn.innerHTML = '<i class="fas fa-chevron-down"></i> عرض الكل';
                btn.classList.remove('active');
                showingAll = false;
            }
        }

        renderProjects();


        // دالة عرض المهارات
        function renderSkills() {
            const container = document.getElementById('skillsGrid');
            container.innerHTML = '';
            skills.forEach((skill, index) => {
                const card = document.createElement('div');
                card.className = 'skill-card';
                card.innerHTML = `
                    <div class="skill-header">
                        <div class="skill-icon" style="background: ${skill.color}15; color: ${skill.color};">
                            <i class="${skill.icon}"></i>
                        </div>
                        <div class="skill-info">
                            <h3>${skill.name}</h3>
                            <span>${skill.category}</span>
                        </div>
                    </div>
                    <div class="skill-progress">
                        <div class="progress-header" style="display:flex; justify-content:space-between; margin-bottom:8px;">
                            <span style="font-size:0.85rem;">مستوى الخبرة</span>
                            <span class="progress-percent" data-target="${skill.percent}" style="font-weight:800; color:var(--primary-color);">0%</span>
                        </div>
                        <div class="progress-bar-bg">
                            <div class="progress-bar-fill" data-width="${skill.percent}"></div>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // أنيميشن أشرطة التقدم
        function animateProgressBars() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const fills = entry.target.querySelectorAll('.progress-bar-fill');
                        const percents = entry.target.querySelectorAll('.progress-percent');
                        fills.forEach((fill, i) => { setTimeout(() => { fill.style.width = fill.getAttribute('data-width') + '%'; }, i * 100); });
                        percents.forEach((percent, i) => {
                            setTimeout(() => {
                                let current = 0;
                                const target = parseInt(percent.getAttribute('data-target'));
                                const interval = setInterval(() => { current++; percent.textContent = current + '%'; if (current >= target) clearInterval(interval); }, 15);
                            }, i * 100);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            observer.observe(document.getElementById('skills'));
        }

        // استدعاء الدوال عند تحميل الصفحة
        window.addEventListener('load', () => {
            renderSkills();
            animateProgressBars();
        });

        // ===== إرسال الرسالة عبر تطبيق البريد =====
        function sendViaGmail(event) {
            event.preventDefault();
            
            const name = document.getElementById('senderName').value.trim();
            const email = document.getElementById('senderEmail').value.trim();
            const message = document.getElementById('senderMessage').value.trim();
            
            if (!name || !email || !message) {
                showToast('الرجاء ملء جميع الحقول', 'error');
                return;
            }
            
            const subject = encodeURIComponent(`رسالة من ${name} - موقعك الشخصي`);
            const body = encodeURIComponent(
                `مرحباً محمد،\n\n` +
                `لقد تلقيت رسالة جديدة من موقعك الشخصي:\n\n` +
                `━━━━━━━━━━━━━━━━━━━━━━\n` +
                `👤 الاسم: ${name}\n` +
                `📧 البريد الإلكتروني: ${email}\n` +
                `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
                `📝 الرسالة:\n${message}\n\n` +
                `━━━━━━━━━━━━━━━━━━━━━━\n` +
                `تم الإرسال من: موقعك الشخصي | ${new Date().toLocaleDateString('ar-SA')}`
            );
            
            const mailtoUrl = `mailto:alsabry615@gmail.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoUrl;
            
            // إظهار رسالة النجاح
            showToast('تم فتح تطبيق البريد بنجاح! يرجى إكمال الإرسال', 'success');
            
            // تفريغ الفورم
            document.getElementById('contactForm').reset();
        }

        // ===== نظام إشعارات Toast =====
        function showToast(message, type = 'success') {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.innerHTML = `
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            `;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.add('hide');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // ===== زر العودة للأعلى =====
        
        function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
        window.addEventListener('scroll', () => { document.getElementById('backToTopBtn').style.display = window.pageYOffset > 300 ? 'block' : 'none'; });

        // ===== معاينة السيرة الذاتية =====
        function openCVPreview() {
            document.getElementById('cvModal').classList.add('show');
        }

        function closeCVPreview() {
            document.getElementById('cvModal').classList.remove('show');
        }

        // إغلاق النافذة عند الضغط خارجها
        window.addEventListener('click', (event) => {
            const modal = document.getElementById('cvModal');
            if (event.target === modal) {
                closeCVPreview();
            }
        });
    