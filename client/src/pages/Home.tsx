import React, { useState } from "react";
import { Globe, Instagram, Lock, Image as ImageIcon, Video, MoreVertical, Twitter, BadgeCheck, ChevronUp, ChevronDown, Check } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@assets/IMG_6683_1765913083553.jpeg";
import bannerImage from "@assets/IMG_6682_1765913083553.jpeg";

export default function Home() {
  const [isPromotionsOpen, setIsPromotionsOpen] = useState(true);
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  // Configuration for links - User can edit these easily
  const LINKS = {
    month1: "https://app.pushinpay.com.br/service/pay/A09BEBEF-C70F-4E68-81F5-E5CEF5605E29", // Link para o plano de 1 mês
    month3: "https://app.pushinpay.com.br/service/pay/a09bed1a-40f9-4673-91f2-7a92a1509cc6", // Link para o plano de 3 meses
    month12: "https://app.pushinpay.com.br/service/pay/A09BED91-63CF-4D6A-9CFC-877456478FF3" // Link para o plano de 12 meses
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-20 font-sans selection:bg-[#FF9A5A] selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between bg-[#FDFBF7] px-4 shadow-sm border-b border-gray-100">
        <div className="flex items-center mx-auto">
           <span className="text-[22px] font-bold tracking-tight text-gray-900">privacy<span className="text-[#FF5F1F]">.</span></span>
        </div>
        <Button variant="ghost" size="icon" className="absolute right-2 text-gray-500 hover:text-gray-900 hover:bg-transparent">
          <Globe className="h-6 w-6 stroke-[1.5]" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="pt-14 w-full max-w-[600px] mx-auto bg-[#FDFBF7] min-h-screen">
        {/* Banner */}
        <div className="relative h-32 sm:h-48 w-full overflow-hidden">
          <img 
            src={bannerImage} 
            alt="Banner" 
            className="h-full w-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="relative px-5 pb-4">
          {/* Avatar */}
          <div className="relative -mt-12 mb-3 inline-block">
            <div className="rounded-full bg-[#FDFBF7] p-[3px]">
              <Avatar className="h-[88px] w-[88px] border border-gray-100 shadow-sm">
                <AvatarImage src={profileImage} alt="Amiichan" className="object-cover" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute bottom-1.5 right-1.5 h-3.5 w-3.5 rounded-full bg-[#10B981] ring-2 ring-white"></div>
          </div>

          {/* Stats Row */}
          <div className="absolute right-4 top-3 flex items-center gap-3 text-xs font-medium text-gray-500">
            <div className="flex items-center gap-1">
              <ImageIcon className="h-4 w-4 stroke-[1.5]" /> 33
            </div>
            <div className="flex items-center gap-1">
              <Video className="h-4 w-4 stroke-[1.5]" /> 11
            </div>
            <div className="flex items-center gap-1">
              <Lock className="h-4 w-4 stroke-[1.5]" /> 1
            </div>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-4 w-4"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> 344
            </div>
          </div>

          {/* Name & Handle */}
          <div className="mb-2">
            <div className="flex items-center gap-1">
              <h1 className="text-[20px] font-bold text-gray-900 leading-tight">Amiichan</h1>
              <div className="rounded-full bg-[#FF5F1F]/10 p-0.5">
                <Check className="h-3 w-3 text-[#FF5F1F] stroke-[3]" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">@amiichann</p>
          </div>

          {/* Bio */}
          <div className="mb-5">
            <div className={`text-[15px] leading-relaxed text-gray-700 ${!isBioExpanded ? 'line-clamp-2' : ''}`}>
              Oie amor, sou Amii e tenho 18 anos! Adoro fazer vídeos provocando meus amigos e punheta Guiada pra te fazer gozar bem gostoso ; Faço vídeos solo, streap, masturbação com e sem brinquedinhos, gosto de trazer temas bem diferenciados sempre. Estarei aqui te esperando amor!
            </div>
            {!isBioExpanded && (
              <button 
                onClick={() => setIsBioExpanded(true)}
                className="mt-1 text-sm font-semibold text-[#FF5F1F] hover:text-[#E04F10] transition-colors"
              >
                Ler mais
              </button>
            )}
          </div>

          {/* Socials */}
          <div className="mb-8 flex gap-3">
            <a href="#" className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-transparent hover:bg-gray-50 text-gray-700 hover:text-[#FF5F1F] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-transparent hover:bg-gray-50 text-gray-700 hover:text-[#FF5F1F] transition-colors">
              <Twitter className="h-4 w-4 fill-current" />
            </a>
          </div>

          {/* Assinaturas */}
          <div className="space-y-4">
            <h3 className="text-[16px] font-bold text-gray-900">Assinaturas</h3>
            
            {/* 1 Month */}
            <a href={LINKS.month1} className="block group animate-pulse-slow">
              <div className="bg-gradient-to-r from-[#FF9A5A] to-[#FF7B5A] hover:brightness-105 relative flex items-center justify-between overflow-hidden rounded-[20px] px-6 py-4 text-white shadow-md shadow-orange-200/50 transition-all duration-300 transform active:scale-[0.98]">
                <span className="font-bold text-[16px]">1 mês</span>
                <span className="text-[17px] font-bold tracking-tight">R$ 19,90</span>
              </div>
            </a>

            {/* Promoções Header */}
            <div className="space-y-3 pt-2">
              <button 
                onClick={() => setIsPromotionsOpen(!isPromotionsOpen)}
                className="flex w-full items-center justify-between group py-1"
              >
                <h3 className="text-[16px] font-bold text-gray-900">Promoções</h3>
                {isPromotionsOpen ? (
                  <ChevronUp className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
                )}
              </button>

              <div className={`space-y-3 overflow-hidden transition-all duration-300 ease-in-out ${isPromotionsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {/* 3 Months */}
                <a href={LINKS.month3} className="block group animate-pulse-slow">
                  <div className="bg-gradient-to-r from-[#FF9A5A] to-[#FF7B5A] hover:brightness-105 relative flex items-center justify-between overflow-hidden rounded-[20px] px-6 py-4 text-white shadow-md shadow-orange-200/50 transition-all duration-300 transform active:scale-[0.98]">
                    <div className="flex flex-col">
                      <span className="font-bold text-[16px]">3 meses</span>
                      <span className="text-xs font-medium text-white/90">(10% de desconto)</span>
                    </div>
                    <span className="text-[17px] font-bold tracking-tight">R$ 47,90</span>
                  </div>
                </a>

                {/* 12 Months */}
                <a href={LINKS.month12} className="block group animate-pulse-slow">
                  <div className="bg-gradient-to-r from-[#FF9A5A] to-[#FF7B5A] hover:brightness-105 relative flex items-center justify-between overflow-hidden rounded-[20px] px-6 py-4 text-white shadow-md shadow-orange-200/50 transition-all duration-300 transform active:scale-[0.98]">
                    <div className="flex flex-col">
                      <span className="font-bold text-[16px]">12 meses</span>
                      <span className="text-xs font-medium text-white/90">(10% de desconto)</span>
                    </div>
                    <span className="text-[17px] font-bold tracking-tight">R$ 99,90</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mt-6 border-t border-gray-100">
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 border-b border-gray-100">
              <TabsTrigger 
                value="posts" 
                className="rounded-none border-b-[2px] border-transparent bg-transparent py-4 text-gray-400 font-medium data-[state=active]:border-[#FF5F1F] data-[state=active]:text-[#FF5F1F] data-[state=active]:shadow-none hover:text-gray-600 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="h-5 w-3.5 rounded-[2px] border-[1.5px] border-current" />
                  <span className="text-sm font-semibold">13 Postagens</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="media" 
                className="rounded-none border-b-[2px] border-transparent bg-transparent py-4 text-gray-400 font-medium data-[state=active]:border-[#FF5F1F] data-[state=active]:text-[#FF5F1F] data-[state=active]:shadow-none hover:text-gray-600 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  <span className="text-sm font-semibold">44 Mídias</span>
                </div>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="posts" className="mt-0 min-h-[300px] bg-[#FDFBF7]">
               {/* Locked Post Preview */}
               <div className="p-4 sm:p-6">
                  <Card className="overflow-hidden border-none shadow-sm rounded-2xl bg-white ring-1 ring-gray-100">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 border border-gray-100">
                            <AvatarImage src={profileImage} />
                            <AvatarFallback>AM</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1">
                              <span className="font-bold text-sm text-gray-900">Amiichan</span>
                              <div className="rounded-full bg-[#FF5F1F]/10 p-0.5">
                                <Check className="h-2 w-2 text-[#FF5F1F] stroke-[3]" />
                              </div>
                            </div>
                            <span className="text-xs text-gray-500 font-medium">@amiichann</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-xs text-gray-400 font-medium">10 h</span>
                           <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
                             <MoreVertical className="h-4 w-4" />
                           </Button>
                        </div>
                      </div>
                      
                      {/* Locked Content Area */}
                      <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center bg-[#F5F3EF] text-center overflow-hidden">
                        <img 
                          src={profileImage} 
                          className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50"
                          alt="Blurred content"
                        />
                        <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-4 p-6 bg-white/30 backdrop-blur-sm">
                           <div className="rounded-full bg-white p-4 shadow-sm">
                             <Lock className="h-6 w-6 text-[#FF5F1F]" strokeWidth={2.5} />
                           </div>
                           <p className="text-sm font-medium text-gray-600">Assine para ver este conteúdo</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 px-5 py-4 text-gray-400">
                         <div className="flex items-center gap-1.5 text-xs font-medium hover:text-[#FF5F1F] cursor-pointer transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> 344
                         </div>
                         <div className="flex items-center gap-1.5 text-xs font-medium hover:text-[#FF5F1F] cursor-pointer transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg> 12
                         </div>
                         <div className="flex items-center gap-1.5 text-xs font-medium ml-auto hover:text-[#FF5F1F] cursor-pointer transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                         </div>
                      </div>
                    </CardContent>
                  </Card>
               </div>
            </TabsContent>
            
            <TabsContent value="media" className="mt-0 p-12 text-center text-gray-400">
               <div className="flex flex-col items-center gap-3">
                  <div className="rounded-full bg-gray-100 p-4">
                    <Lock className="h-8 w-8 text-gray-300" />
                  </div>
                  <p className="text-sm">Conteúdo de mídia protegido.</p>
               </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
