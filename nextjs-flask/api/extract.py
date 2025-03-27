import re
import nltk
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords

nltk.download('punkt', download_dir='/tmp/nltk_data')
nltk.download('stopwords', download_dir='/tmp/nltk_data')
nltk.download('wordnet', download_dir='/tmp/nltk_data')

lemmatizer = WordNetLemmatizer()
stop_words = stopwords.words('english')

def preprocess(text):
    # Cleans and preprocesses text"
    if not text:
        return ''
    
    # Conver to lowercase and remove special characters
    text = text.lower()
    text = re.sub(r'[^\w\s]', ' ', text)

    # Tokenize
    tokens = word_tokenize(text)

    # Remove stop words and stem
    preprocessed_tokens = [
        lemmatizer.lemmatize(token) for token in tokens if token not in stop_words and len(token) > 2
    ]

    return ' '.join(preprocessed_tokens)