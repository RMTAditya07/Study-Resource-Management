from smtplib import SMTP
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# SMTP_HOST = "127.0.0.1"
# SMTP_PORT = 1025
SENDER_EMAIL = 'rmtaditya07@gmail.com'
RECEIVER_EMAIL = 'davana2766@maxturns.com'

SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
SMTP_USERNAME = 'rmtaditya07@gmail.com'
SMTP_PASSWORD = ''

def send_message(to, subject, content_body):
    msg = MIMEMultipart()
    msg["To"] = to
    msg["Subject"] = subject
    msg["From"] = SENDER_EMAIL
    msg.attach(MIMEText(content_body, "plain"))
    with SMTP(SMTP_SERVER,SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USERNAME, SMTP_PASSWORD)
        server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL,msg.as_string())
        
# content_body = "HElo guys"
# msg = MIMEMultipart()    
# msg["To"] = RECEIVER_EMAIL
# msg["Subject"] = "subject"
# msg["From"] = SENDER_EMAIL

# msg.attach(MIMEText(content_body, "plain"))


# with SMTP(SMTP_SERVER,SMTP_PORT) as server:
#     server.starttls()
#     server.login(SMTP_USERNAME, SMTP_PASSWORD)
#     server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL,msg.as_string())

# send_message('davana2766@maxturns.com', 'test', 'TEst test')
