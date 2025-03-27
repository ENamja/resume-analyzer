import pymupdf

def pdf_to_text(pdf_path: str, output_txt: str) -> None:
    doc = pymupdf.open(pdf_path)

    with open(output_txt, 'wb') as out:
        for page in doc:
            text = page.get_text().encode('utf-8')
            out.write(text)
            out.write(bytes((12,)))
    
if __name__ == '__main__':
    pdf_path = 'Resume(2025).pdf'

    output_txt = 'resume.txt'

    pdf_to_text(pdf_path, output_txt)

    print("PDF converted to text successfully!")