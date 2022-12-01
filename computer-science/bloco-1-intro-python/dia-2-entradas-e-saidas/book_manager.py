import json
import csv

# with open("books.json") as file:
#     book = json.load(file)

# print(book[0]['categories'])

def retrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
                # print(categories)
            categories[category] += 1
    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
        return [
            [category, num_books / total_books]
            for category, num_books in book_count_by_category.items()
        ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":

    # abre o arquivo
    with open("books.json") as file:
        books = retrieve_books(file)
    
    # conta por categoria
    book_count_by_category = count_books_by_categories(books)

    # calculo de porcentagem
    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category, number_of_books
    )

    # criando e populando arquivo:
    header = ["categoria", "porcentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)