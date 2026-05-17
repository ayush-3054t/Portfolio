async function testEmailJS() {
    const data = {
        service_id: 'service_ikn7whb',
        template_id: 'template_q4o0vtj',
        user_id: 'BBX3vIGSCL7bnROuB',
        template_params: {
            user_name: 'Test Name',
            user_email: 'test@example.com',
            message: 'This is a test message from the automated system.'
        }
    };

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log('Success: Email sent successfully!');
        } else {
            const text = await response.text();
            console.log('Error:', response.status, text);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

testEmailJS();
