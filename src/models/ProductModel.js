class ProductModel {
    constructor({
        id,
        name,
        description,
        moreinformations,
        price,
        isbestseller,
        isnewarrival,
        isfeatured,
        isspecialoffer,
        image,
        quantity,
        createdAt,
        tags,
        slug,
        purchasePrice,
        coefficientMultiplier,
        barcode,
        style,
        variants,
        category
    }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.moreinformations = moreinformations;
        this.price = price;
        this.isbestseller = isbestseller;
        this.isnewarrival = isnewarrival;
        this.isfeatured = isfeatured;
        this.isspecialoffer = isspecialoffer;
        this.image = image;
        this.quantity = quantity;
        this.createdAt = createdAt;
        this.tags = tags;
        this.slug = slug;
        this.purchasePrice = purchasePrice;
        this.coefficientMultiplier = coefficientMultiplier;
        this.barcode = barcode;
        this.style = new StyleModel(style);
        this.variants = variants.map(variant => new VariantModel(variant));
        this.category = category.map(cat => new CategoryModel(cat));
    }
}

class StyleModel {
    constructor({ id, name }) {
        this.id = id;
        this.name = name;
    }
}

class VariantModel {
    constructor({ id, color, size, stockQuantity }) {
        this.id = id;
        this.color = new ColorModel(color);
        this.size = new SizeModel(size);
        this.stockQuantity = stockQuantity;
    }
}

class ColorModel {
    constructor({ id, name, codeHexa }) {
        this.id = id;
        this.name = name;
        this.codeHexa = codeHexa;
    }
}

class SizeModel {
    constructor({ id, name }) {
        this.id = id;
        this.name = name;
    }
}

class CategoryModel {
    constructor({ id, name, description, image }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
    }
}
export default ProductModel;