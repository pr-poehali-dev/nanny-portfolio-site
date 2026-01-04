import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за обращение! Я свяжусь с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Профессиональная няня</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">Обо мне</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 text-sm">Профессиональная няня с опытом 15+ лет</Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Забота и безопасность вашего ребенка
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Опытная няня с педагогическим образованием и международными сертификатами. 
                Работаю с детьми всех возрастов на своей территории в комфортных и безопасных условиях.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="gap-2">
                  <Icon name="Send" size={20} />
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-fade-in delay-200">
              <img 
                src="https://cdn.poehali.dev/projects/2a6e4815-39ae-478b-bf5a-b59843a0a43b/files/2caf349f-2a8b-456c-a766-24418652c853.jpg" 
                alt="Профессиональная няня"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-20">
            {[
              { icon: 'Award', title: '15+ лет опыта', desc: 'Работа с детьми разных возрастов' },
              { icon: 'GraduationCap', title: 'Образование', desc: 'Педагогическое + курсы повышения' },
              { icon: 'ShieldCheck', title: 'Безопасность', desc: 'Сертификат первой помощи' },
              { icon: 'Heart', title: 'Индивидуальный подход', desc: 'К каждому ребенку' }
            ].map((item, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Обо мне</h2>
              
              <div className="space-y-8">
                <Card className="animate-slide-in">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Briefcase" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Опыт работы</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          За 15 лет работы я воспитывала детей разных возрастов — от младенцев до школьников. 
                          Работала в семьях с детьми с особыми потребностями, помогала с развивающими занятиями, 
                          подготовкой к школе и организацией досуга.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-slide-in" style={{ animationDelay: '100ms' }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="BookOpen" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Образование</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={18} className="text-primary mt-1 flex-shrink-0" />
                            <span>Высшее педагогическое образование (дошкольная педагогика и психология)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={18} className="text-primary mt-1 flex-shrink-0" />
                            <span>Курсы раннего развития детей по методике Монтессори</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={18} className="text-primary mt-1 flex-shrink-0" />
                            <span>Сертификат первой медицинской помощи детям</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-slide-in" style={{ animationDelay: '200ms' }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Medal" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Сертификаты</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            'Сертификат оказания первой помощи',
                            'Международный сертификат Монтессори',
                            'Курс детской психологии',
                            'Сертификат по работе с детьми с ОВЗ'
                          ].map((cert, i) => (
                            <div key={i} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                              <Icon name="Award" size={18} className="text-primary flex-shrink-0" />
                              <span className="text-sm">{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Мои услуги</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: 'Baby',
                  title: 'Уход за младенцами',
                  desc: 'Полный уход за детьми от 6 месяцев: кормление, гигиена, развивающие игры по возрасту',
                  features: ['Соблюдение режима дня', 'Развивающие занятия', 'Прогулки на свежем воздухе']
                },
                {
                  icon: 'Sparkles',
                  title: 'Дошкольники',
                  desc: 'Развитие и воспитание детей от 3 до 6 лет с подготовкой к школе',
                  features: ['Творческие занятия', 'Подготовка к школе', 'Развитие речи и логики']
                },
                {
                  icon: 'BookMarked',
                  title: 'Школьники',
                  desc: 'Помощь с домашними заданиями, развитие самостоятельности',
                  features: ['Помощь с уроками', 'Организация досуга', 'Развитие навыков']
                }
              ].map((service, i) => (
                <Card key={i} className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12 max-w-4xl mx-auto bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Home" size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Работа на своей территории</h3>
                    <p className="text-muted-foreground mb-4">
                      Принимаю детей в своем доме, который полностью адаптирован для детей любого возраста. 
                      Есть игровая комната с развивающими игрушками, безопасное пространство для активных игр, 
                      зона для творчества и обучения. Организую питание, прогулки на свежем воздухе во дворе.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Безопасное пространство</Badge>
                      <Badge variant="secondary">Развивающие игрушки</Badge>
                      <Badge variant="secondary">Здоровое питание</Badge>
                      <Badge variant="secondary">Своя территория для прогулок</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="reviews" className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Отзывы родителей</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: 'Анна Петрова',
                  children: 'Мама Маши, 4 года',
                  text: 'Мы водим дочку уже год и очень довольны! Ребенок всегда счастлив, много развивается. Особенно нравится индивидуальный подход и профессионализм.',
                  rating: 5
                },
                {
                  name: 'Дмитрий Соколов',
                  children: 'Папа Артёма, 6 лет',
                  text: 'Отличная подготовка к школе! Сын научился читать, считать и главное — стал более самостоятельным. Спасибо за заботу и профессионализм!',
                  rating: 5
                },
                {
                  name: 'Елена Волкова',
                  children: 'Мама двойняшек, 3 года',
                  text: 'С двумя детьми не всегда легко, но здесь нашли к каждому подход. Дети всегда возвращаются довольными и рассказывают, что нового узнали.',
                  rating: 5
                }
              ].map((review, i) => (
                <Card key={i} className="animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${i * 100}ms` }}>
                  <CardContent className="pt-6">
                    <div className="flex mb-3">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Icon key={j} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">"{review.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.children}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Свяжитесь со мной</h2>
              <p className="text-center text-muted-foreground mb-12">
                Оставьте заявку, и я свяжусь с вами в ближайшее время для обсуждения деталей
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                        <Input 
                          placeholder="Введите ваше имя"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Телефон</label>
                        <Input 
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Сообщение</label>
                        <Textarea 
                          placeholder="Расскажите о вашем ребенке и ваших пожеланиях"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          rows={4}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full gap-2">
                        <Icon name="Send" size={18} />
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Телефон</h3>
                          <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-muted-foreground">nanny.pro@example.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Clock" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Режим работы</h3>
                          <p className="text-muted-foreground">Пн-Пт: 8:00 - 19:00</p>
                          <p className="text-muted-foreground">Сб: по договоренности</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Профессиональная няня. Все права защищены.</p>
          <p className="text-xs mt-2 opacity-80">Опыт работы 15+ лет • Педагогическое образование • Международные сертификаты</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
