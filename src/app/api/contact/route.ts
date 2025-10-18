import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    // Vérifier si la clé Web3Forms est configurée
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      // Si pas de clé configurée, on retourne quand même un succès
      // mais on log les données (en production, vous devriez configurer la clé)
      console.log('Email à envoyer:', {
        to: 'contact@cocoflow.ch',
        from: email,
        name: name,
        subject: subject || 'Nouveau message de contact CocoFlow',
        message: message
      });
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Message reçu (mode développement - configurez WEB3FORMS_ACCESS_KEY pour l\'envoi réel)' 
        },
        { status: 200 }
      );
    }

    // Envoi réel avec Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        subject: subject || 'Nouveau message de contact CocoFlow',
        message: message,
        from_name: 'CocoFlow Website',
        replyto: email,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Erreur lors de l\'envoi de l\'email');
    }

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json(
      { 
        error: 'Une erreur est survenue lors de l\'envoi du message',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
}

