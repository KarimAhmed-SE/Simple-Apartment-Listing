"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ credentials: true, origin: "http://localhost:8081" }));
const connection = process.env.CONNECTION;
mongoose_1.default
    .connect(connection)
    .then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to port " + process.env.PORT);
    });
})
    .catch((error) => {
    console.log(error);
});
const apartmentSchema = new mongoose_1.default.Schema({
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    bedrooms: Number,
    bathrooms: Number,
    address: {
        type: String,
        required: true,
    },
    city: String,
    country: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: String,
    sellerEmail: {
        type: String,
        required: true,
    },
    sellerPhone: {
        type: String,
        required: true,
    },
    sellerFirstName: {
        type: String,
        required: true,
    },
    sellerLastName: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const Apartment = mongoose_1.default.models.Apartment || mongoose_1.default.model("Apartment", apartmentSchema);
app.get("/apartments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartments = yield Apartment.find();
        res.status(200).json(apartments);
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}));
app.get("/apartments/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartment = yield Apartment.findById(req.params.id);
        res.status(200).json(apartment);
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}));
app.post("/apartments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apartment = new Apartment({
        price: req.body.price,
        type: req.body.type,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        description: req.body.description,
        image: req.body.image,
        sellerEmail: req.body.sellerEmail,
        sellerPhone: req.body.sellerPhone,
        sellerFirstName: req.body.sellerFirstName,
        sellerLastName: req.body.sellerLastName,
    });
    try {
        yield apartment.save();
        res.status(201).json(apartment);
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}));
